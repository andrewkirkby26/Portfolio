import {EventEmitter, Injectable, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common'
import {AuthenticationService} from './authentication.service';
import {EventService} from './event.service';
import {DataCacheService} from './dataHolderService';
import {Constants} from '../constants/constants';
import {Utils} from '../utils/utils';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../components/dialog/dialog.component';
import {ColorSchemeService} from './colorsScheme.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Snackbar} from '../interfaces/snackbar';
import {HttpClient} from '@angular/common/http';
import {Dialog} from '../interfaces/dialog';
import {SnackbarComponent} from "../components/snackbar/snackbar.component";
import {environment} from "../../environments/environment";
import {SiteEventService} from "./siteEvents.service";

@Injectable({
    providedIn: 'root',
})
export class NavigationService {

    /** Emitter used to be notified when screen size is updated */
    @Output() screenSizeUpdate: EventEmitter<string> = new EventEmitter();

    desiredRouteAfterLogin: string | null = null;
    screenSize: string = Constants.SCREEN_SIZE_LARGE;
    salutation = '';
    queryParams = Utils.getAllQueryParameters();
    currentTime = new Date();
    entirePercentScroll = 0;
    ignoreScroll = false;
    navbarVisible = false;
    navbarItems = [
        {
            name: Constants.HOME,
            hidden: true
        },
        {
            name: Constants.ABOUT,
        },
        {
            name: Constants.EXPERIENCES,
        },
        {
            name: Constants.PROJECTS,
        },
        {
            name: Constants.CERTIFICATES,
        },
        {
            name: Constants.CONTACT,
        }
    ]
    currentSection: any = this.navbarItems[0];
    selectedSlideShow: any | null = null;

    constructor(private router: Router, public dialogController: MatDialog, public httpUtil: HttpClient, private route: ActivatedRoute, private location: Location, public authenticationService: AuthenticationService,
                public eventService: EventService, public dataCache: DataCacheService, public colorSchemeService: ColorSchemeService, public _snackBar: MatSnackBar, public siteEventService: SiteEventService) {

        colorSchemeService.load();

        this.eventService.scrollOptionSelect.subscribe((name) => {
            if (!this.ignoreScroll && name && name != this.currentSection.name) {
                this.currentSection = this.getNavItemByName(name);
            }
        })

        $(window).on('resize', () => {
            this.updateScreenSize();
            this.eventService.screenSizeChanged.emit();
        });

        setInterval(() => {
            this.cycleOnce();
        }, 1000);
        this.cycleOnce();

        this.eventService.showDialogReq.subscribe((body: Dialog) => {
            this.showDialog(body);
        })

        this.eventService.closeDialogByNameReq.subscribe(name => {
            this.closeDialogByName(name);
        })

        this.eventService.jumpToRedirectReq.subscribe(redirect => {
            this.jumpToRedirect(redirect);
        })

        this.eventService.showSnackBar.subscribe(pack => {
            this.showSnackBar(pack);
        })

        this.eventService.setViewReq.subscribe(view => {
            this.setView(this.getNavItemByName(view));
        })

        this.updateScreenSize();

        this.eventService.userLoggedIn.subscribe(resp => {
            if (this.desiredRouteAfterLogin != null) {
                this.eventService.setViewReq.emit(this.desiredRouteAfterLogin);
            }
        })
    }
    toggleNavbar(force: boolean | null = null) {
        if (force != null) {
            this.navbarVisible = force;
        } else {
            this.navbarVisible = !this.navbarVisible;
        }
    }

    closeSlideShow() {
        this.selectedSlideShow = null;
    }

    selectSlideShow(slides: string[], index: number) {
        this.selectedSlideShow = {
            media: slides,
            index: index
        };
    }

    showSnackBar(snack: Snackbar) {
        if (!snack.config) {
            snack.config = {
                duration: 5000
            }
        }
        let config = snack.config;
        config.data = snack;
        this._snackBar.openFromComponent(SnackbarComponent, config);
    }

    download(url: string, filename: string) {
        fetch(url).then(function (t) {
            return t.blob().then((b) => {
                    var a = document.createElement("a");
                    a.href = URL.createObjectURL(b);
                    a.setAttribute("download", filename);
                    a.click();
                }
            );
        });
    }

    /** Method used to set view/perspective of UI. (Expects a navbarItem like object)
     * This method checks to see if a minimum acccess level is required and responds accordingly
     *
     * @param view navbarItem like object (JSON) that can be used to set view
     * @returns boolean of whether it successfully set view
     *  */
    setView(view: any): boolean {
        this.desiredRouteAfterLogin = null;
        if (!view) {
            return false;
        }
        if (view.name) {
            this.currentSection = view;
            this.eventService.sectionSelected.emit();
            return true;
        } else {
            return false;
        }
    }

    showDialog(body: Dialog, disableClose = false) {
        let dialogNamesToNotAllowClosingOnClick: any[] = []
        this.dialogController.open(DialogComponent, {
            data: body,
            disableClose: dialogNamesToNotAllowClosingOnClick.includes(body.name!) || disableClose
        });
    }

    showDialogByName(name: string) {
        if (this.isDialogOpenByName(name)) {
            this.closeDialogByName(name);
        }
        let dialog = new Dialog();
        dialog.name = name;
        this.showDialog(dialog);
    }

    closeAllDialogs() {
        this.dialogController.closeAll();
    }

    isAnyDialogOpen(): boolean {
        return this.dialogController.openDialogs.length != 0;
    }

    isDialogOpenByName(name: string | null) {
        let rVal = false;
        try {
            this.dialogController.openDialogs.forEach((dialog) => {
                if (name == dialog.componentInstance.data.name) {
                    rVal = true;
                }
            })
        } catch (e) {

        }
        return rVal;
    }

    closeDialogByName(name: string | null) {
        this.dialogController.openDialogs.forEach((dialog) => {
            if (name == dialog.componentInstance.data.name) {
                dialog.close();
            }
        })
    }

    getAvailableNavItemsForUser(): any[] {
        let rVal: any[] = [];

        let temp = this.navbarItems;
        let holder = this;
        temp.forEach(function (item: any) {
            rVal.push(item);
        })

        return rVal;
    }

    updateScreenSize() {
        this.screenSize = Utils.getScreenSize();
    }


    /**
     *
     * Method used to get a navbarItem or child navItem with a view attribute matching the supplied view
     * Note: Handles smarts for device/bank view
     *
     * @param view view attribute of desired navItem
     * @returns navbarItem or childNavItem with a matching view attribute
     */
    getNavItemByName(view: string): any | null {
        let rVal: any = null;

        this.getAvailableNavItemsForUser().forEach(function (item: any) {
            if (item.name == view) {
                rVal = item;
            }
        })
        return rVal;
    }

    /** Method used to redirect user AWAY from UI... should NOT be used for inner UI travel */
    jumpToRedirect(redirect: string) {
        window.location.href = redirect;
    }

    /** Cycle once called every 2 seconds just to keep the time up to date */
    cycleOnce() {
        this.currentTime = new Date();
        this.updateQueryParams();
    }

    /** Simple method to force a true browser refresh */
    refresh() {
        window.location.reload();
    }

    jumpHome() {
        this.setView(this.getNavItemByName(Constants.HOME));
    }

    updateQueryParams() {
        this.queryParams = Utils.getAllQueryParameters()
    }

    getCurrentRoute(): string {
        return Utils.getCurrentRoute();
    }
}
