import {Education} from "./education";
import {Profession} from "./profession";
import {Activity} from "./activity";
import {Project} from "./project";
import {Social} from "./social";
import {About} from "./about";
import {Trait} from "./trait";
import {Utils} from "../utils/utils";
import {SkillGroup} from "./skillGroup";
import {Certificate} from "./certificate";

export class Resume {

    about: About | null = null;
    socials: Social[] = [];
    traitsCircle: Trait[] = [];
    certificates: Certificate[] = [];
    traitsBar: Trait[] = [];
    skills: SkillGroup[] = [];
    education: Education[] = []
    professions: Profession[] = [];
    activities: Activity[] = [];
    projects: Project[] = [];
    orderedExperiences: any[] = [];
    orderedActivities: any[] = [];

    constructor(c: any | null) {
        if (c) {
            this.about = new About(c.about);
            this.about = c.about;
            this.socials = [];
            if (c.socials) {
                // @ts-ignore
                c.socials.forEach((s) => {
                    this.socials.push(new Social(s));
                })
            }
            if (c.education) {
                // @ts-ignore
                c.education.forEach((s) => {
                    this.education.push(new Education(s));
                })
            }
            if (c.certificates) {
                //@ts-ignore
                c.certificates.forEach((c) => {
                    this.certificates.push(new Certificate(c));
                })
            }
            if (c.professions) {
                // @ts-ignore
                c.professions.forEach((s) => {
                    this.professions.push(new Profession(s));
                })
            }
            if (c.activities) {
                // @ts-ignore
                c.activities.forEach((s) => {
                    this.activities.push(new Activity(s));
                })
            }
            if (c.projects) {
                // @ts-ignore
                c.projects.forEach((s) => {
                    this.projects.push(new Project(s));
                })
            }
            if (c.traitsCircle) {
                // @ts-ignore
                c.traitsCircle.forEach((s) => {
                    this.traitsCircle.push(new Trait(s));
                })
            }
            if (c.traitsBar) {
                // @ts-ignore
                c.traitsBar.forEach((s) => {
                    this.traitsBar.push(new Trait(s));
                })
            }
            if (c.skills) {
                // @ts-ignore
                c.skills.forEach((s) => {
                    this.skills.push(new SkillGroup(s));
                })
            }
        }
        this.orderedExperiences = this.getOrderedExperiences();
        this.orderedActivities = this.getOrderedActivities();
    }

    getSocialByType(name: string): Social | null{
        let rVal: Social | null = null;

        if (this.socials) {
            this.socials.forEach((social) => {
                if (name == social.type) {
                    rVal = social;
                }
            })
        }

        return rVal;
    }

    protected getOrderedExperiences(): any[] {
        let rVal: any[] = [];

        this.education = this.education ? this.education : [];
        this.professions = this.professions ? this.professions : [];

        // @ts-ignore
        let temp = this.education.concat(this.professions);

        return temp.sort(Utils.sortByProperty('startDate.sort'));
    }

    protected getOrderedActivities(): any[] {
        let rVal: any[] = [];

        this.activities = this.activities ? this.activities : [];
        this.projects = this.projects ? this.projects : [];

        // @ts-ignore
        let temp = this.projects.concat(this.activities);

        return temp.sort(Utils.sortByProperty('startDate.sort'));
    }
}