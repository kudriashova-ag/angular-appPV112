export class User {
    constructor(public name: string, public email: string, public website: string) {
        this.website = `<a href="http://${this.website}">${this.website}</a>`;
     }
    
    
}