import {DateDetail} from "./dateDetail";

export class Project {

    constructor(c: any) {
        if (c) {
            this.name = c.name;
            this.position = c.position;
            this.location = c.location;
            this.startDate = new DateDetail(c.startDate);
            this.finishDate = c.finishDate ? new DateDetail(c.finishDate) : null;
            this.current = c.current;
            this.concern = c.concern;
            this.description = c.description;
            this.media = c.media;
            this.hidden = c.hidden;
        }
    }
    name: string = '';
    position: string = '';
    location: string = '';
    startDate!: DateDetail;
    finishDate: DateDetail | null = null;
    hidden = false;
    current = false;
    concern: string | null = null;
    type = 'Project'
    description: string[] | null = null;
    media: string[] = [];
}
