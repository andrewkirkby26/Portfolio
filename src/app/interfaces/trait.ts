export class Trait {

    constructor(c: any) {
        if (c) {
            this.name = c.name;
            this.confidence = c.confidence;
            this.hidden = c.hidden;
        }
    }

    name: string = '';
    hidden = false;
    confidence: number = 0;
}
