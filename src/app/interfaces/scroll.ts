export class Scroll {

    constructor(scrollHeight: number, height: number, scrollTop: number, percent: number, bottom: number) {
        this.scrollHeight = scrollHeight;
        this.height = height;
        this.top = scrollTop;
        this.percent = percent;
        this.bottom = bottom;
    }

    scrollHeight = 0;
    height = 0;
    top = 0;
    percent = 0;
    bottom = 0;
}