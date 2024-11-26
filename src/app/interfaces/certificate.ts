import {DateDetail} from "./dateDetail";

export class Certificate {

    static TYPE_CERT = 'Certificate';
    static TYPE_AWARD = 'Award';

    constructor(c: any) {
        if (c) {
            this.name = c.name;
            this.location = c.location;
            this.date = new DateDetail(c.date);
            this.description = c.description;
            this.hidden = c.hidden;
            this.type = c.type;
        }
    }

    name: string = '';
    location: string = '';
    hidden = false;
    date!: DateDetail ;
    description: string | null = '';
    type: string = '';
}