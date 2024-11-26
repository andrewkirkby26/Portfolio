export class Social {

    static LINKED_IN = 'LinkedIn';
    static IG = 'IG';
    static FACEBOOK = 'Facebook';
    static TWITTER = 'Twitter';
    static GITHUB = 'Github';

    constructor(c: any) {
        if (c) {
            this.name = c.name;
            this.type = c.type;
            this.url = c.url;
            this.hidden = c.hidden;
        }
    }
    hidden = false;
    name: string = '';
    type: string = '';
    url: string = '';
}
