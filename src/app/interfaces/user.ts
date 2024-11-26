export class User {
  firstName!: string;
  lastName!: string;
  uid!: string;
  email!: string | null;
  userImage!: string | null;
  preferences!: any;
  accessLevel: string | null = null;

  constructor(firstName: string,  lastName: string, uid: string, email: string | null, userImage: string | null, preferences: any, accessLevel: string | null) {
    this.firstName = firstName;
    this.uid = uid;
    this.lastName = lastName;
    this.email = email;
    this.userImage = userImage;
    this.preferences = preferences;
    this.accessLevel = accessLevel;
  }
}

