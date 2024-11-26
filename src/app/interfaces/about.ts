export class About {

    constructor(c: any) {
        if (c) {
            this.name = c.name;
            this.address = c.address;
            this.birthday = c.birthday;
            this.hobbies = c.hobbies;
            this.phone = c.phone;
            this.email = c.email;
            this.extras = c.extras;
            this.career = c.career;
            this.salutations = c.salutations;
            this.landing_photo = c.landing_photo;
            this.about_photo = c.about_photo;
            this.summary = c.summary;
        }
    }

    name: string = '';
    about_photo: string  = '';
    birthday: string | null = null;
    hobbies: string | null = null;
    career: string | null = null;
    phone: string | null = null;
    email: string | null = null;
    address: string | null = null;
    extras: string | null = null;
    summary: string | null = null;
    landing_photo: string = '';
    salutations: string[] | null = null;
}
