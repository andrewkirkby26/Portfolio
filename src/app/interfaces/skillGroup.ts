export class SkillGroup {

    constructor(c: any) {
        if (c) {
            this.name = c.name;
            this.skills = c.skills;
        }
    }

    name: string = '';
    skills: string[] = [];
}
