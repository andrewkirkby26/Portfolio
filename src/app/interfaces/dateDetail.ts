export class DateDetail {
    display: string | null = null;
    month: number | null = null;
    year: number | null = null;
    sort: number = 0;
    constructor(c: any) {
        if (c) {
            this.display = c.display;
            this.month = c.month;
            this.year = c.year;

            if (this.year) {
                this.sort  += this.year * 12;
            }

            if (this.month) {
                this.sort += this.month;
            }
        }
    }

}