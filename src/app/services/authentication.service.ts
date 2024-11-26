import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable, Output, signal, WritableSignal} from '@angular/core';
import {Observable} from 'rxjs';
import * as crypto from "crypto-js";
import {Constants} from '../constants/constants';
import {EventService} from './event.service';
import { getAuth, signInWithEmailAndPassword, Auth, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {User} from '../interfaces/user';
import {environment} from 'src/environments/environment';
import {Snackbar} from "../interfaces/snackbar";
import {FirebaseService} from "../firebase/firebase.service";
import {FirestoreService} from "../firebase/firestore.service";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  auth: Auth;
  /** Variable used to ensure service goes after correct REST endpoing */
  endpoint!: string;
  changeUser: User | null = null;
  /** Variable that is equal to currently active user (null if not logged in) */
  user: User | null = null;
  /** Boolean depicting if the service is initialized successfully yet */
  initialized = false;
  /** Variable that is a string if there is an error upon trying to confirm that we need to show the user (null if no error) */
  confirmationError: string | null = null;
  /** Boolean depicting whether we are trying to confirm the user access level currently */
  attemptingToConfirm = false;
  userApprovedForUse = false;
  firstCheck = true;

  userLevels = [
    Constants.USER_LEVEL_USER,
    Constants.USER_LEVEL_ADMIN
  ]

  /** Event emitter that can be used to logout the user (event may be null) */
  @Output() logoutReq: EventEmitter<any> = new EventEmitter();
  /** Event emitter that can be monitored to see when this service is initialized */
  @Output() initializedNoti: EventEmitter<any> = new EventEmitter();

  constructor(public http: HttpClient, public eventService: EventService, public firebaseService: FirebaseService, public firestoreService: FirestoreService) {
    this.auth = getAuth(firebaseService.app);

    // this.home('andrew.kirkby26@gmail.com', 'Sandy247!')
    // this.logout();
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.firestoreService.getDocumentByCollectionAndName(Constants.COLLECTION_USERS, user.uid).then(elem => {
          this.initialized = true;
          if (elem) {
            this.user = new User(elem['firstName'], elem['lastName'],user.uid, user.email, null, elem['preferences'], null);
            console.log(this.user);

            this.eventService.userLoggedIn.emit(this.user);
            if (this.firstCheck) {
              this.firstCheck = false;
              this.userApprovedForUse = true;
            } else {
              setTimeout(() => {
                this.userApprovedForUse = true;
              },500);
            }
          }
        });
      } else {
        console.log('no user')
        this.initialized = true;
        this.user = null;
        this.changeUser = null;
        this.eventService.userLoggedOut.emit();
      }
    });

    this.eventService.logoutReq.subscribe(resp => {
      this.logout();
    })
  }

  canGoToView(item: any): boolean {
    let rVal = false;
    if (item) {
      rVal = this.checkIfUserLevelAbove(item.minAccessLevel);
    }
    return rVal;
  }

  createUser(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    //GOTTA add user object to firestore
    }

  setUser(user: User) {
    if (user) {
      this.firestoreService.setDocument(Constants.COLLECTION_USERS, user.uid,
        {
          'firstName': user.firstName,
          'lastName': user.lastName,
          'preferences': user.preferences
        }
      );
      this.firestoreService.getDocumentByCollectionAndName(Constants.COLLECTION_USERS, user.uid).then(elem => {
        if (elem) {
          this.user = new User(elem['firstName'], elem['lastName'],user.uid, user.email, null, elem['preferences'], null);
          console.log(this.user);
        }
      });
    }
  }


  checkIfUserLevelAbove(level: string | null): boolean {
    let rVal = false;
    if (!level || level == '' || level.toLowerCase() == 'none') {
      return true;
    }
    if (this.user) {
      try {
        let userLevel = this.user.accessLevel;
        let userIndex = userLevel != null ? this.userLevels.indexOf(userLevel) : -1;
        let desiredIndex = this.userLevels.indexOf(level);
        if (userIndex >= desiredIndex) {
          rVal = true;
        }
      } catch (e) {

      }
    }
    return rVal;
  }

  logout() {
    this.user = null;
    this.userApprovedForUse = false;
    signOut(this.auth)
      .then(() => {

      })
  }

  login(email: string, password: string) {
    let loginError = null;
    if (!email || email == '') {
      loginError = 'Email is required.'
    } else if (!password || password == '') {
      loginError = 'Password is required.'
    }

    if (loginError) {
      this.eventService.showSnackBar.emit(new Snackbar(loginError, null, Constants.SNACKBAR_WARN));
      return;
    }

    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setTimeout(() => {
          (document.getElementById("loginForm")! as HTMLFormElement).reset();
        },1500);
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = 'Unable to Sign In';
        if (errorCode == 'auth/invalid-email') {
          errorMessage = 'Invalid email supplied.';
        } else if (errorCode == 'auth/wrong-password') {
          errorMessage = 'Incorrect password supplied.';
        } else if (errorCode == 'auth/user-not-found') {
          errorMessage = 'No user found with that email.';
        } else if (errorCode == 'auth/too-many-requests') {
          errorMessage = 'You have tried to home too many times, please try again later.';
        }

        this.eventService.showSnackBar.emit(new Snackbar(errorMessage, null, Constants.SNACKBAR_WARN));
      });
  }
}


