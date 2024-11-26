import {DateDetail} from "./dateDetail";

export class Profession {

    constructor(c: any) {
        if (c) {
            this.company = c.company;
            this.position = c.position;
            this.location = c.location;
            this.startDate = new DateDetail(c.startDate);
            this.finishDate = c.finishDate ? new DateDetail(c.finishDate) : null;
            this.current = c.current;
            this.concern = c.concern;
            this.description = c.description;
            this.hidden = c.hidden;
        }
    }

    company: string = '';
    position: string = '';
    location: string = '';
    startDate!: DateDetail;
    finishDate: DateDetail | null = null;
    hidden = false;
    current = false;
    concern: string | null = null;
    description: string[] | null = null;
    type = 'Profession';
}
