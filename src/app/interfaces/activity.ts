export class Activity {

    constructor(c: any) {
        if (c) {
            this.position = c.position;
            this.name = c.name;
            this.location = c.location;
            this.startDate = c.startDate;
            this.finishDate = c.finishDate;
            this.current = c.current;
            this.concern = c.concern;
            this.description = c.description;
            this.hidden = c.hidden;
        }
    }

    name: string = '';
    position: string = '';
    location: string = '';
    startDate: string = '';
    hidden = false;
    finishDate: string | null = null;
    current = false;
    concern: string | null = null;
    type = 'Activity';
    description: string[] | null = null;
}
