import {DateDetail} from "./dateDetail";

export class Education {
    static LEVEL_COLLEGE = 'College';
    static LEVEL_HS = 'High School';

    constructor(c: any) {
        if (c) {
            this.level = c.level;
            this.name = c.name;
            this.location = c.location;
            this.startDate = c.startDate ? new DateDetail(c.startDate) : null;
            this.finishDate = c.finishDate ? new DateDetail(c.finishDate) : null;
            this.current = c.current;
            this.concern = c.concern;
            this.description = c.description;
            this.hidden = c.hidden;
        }
    }

    level: string = '';
    name: string = '';
    location: string = '';
    startDate: DateDetail | null = null;
    finishDate: DateDetail | null = null;
    hidden = false;
    current = false;
    concern: string[] | null = null;
    description: string[] | null = null;
    type = 'Education';
}