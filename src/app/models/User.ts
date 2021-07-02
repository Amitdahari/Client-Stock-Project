export class User {
    constructor() { }
    private idKey: string;
    private phone: string;
    private firstName: string;
    private lastName: string;
    private dateOfBirth: Date;
    private description: string

    get IdKey(): string {
        return this.idKey;
    }
    get Phone(): string {
        return this.phone;
    }
    get FirstName(): string {
        return this.firstName;
    }
    get LastName(): string {
        return this.lastName;
    }
    get DateOfBirth(): Date {
        return this.dateOfBirth;
    }
    get Description(): string {
        return this.description;
    }

    set IdKey(val: string) {
        this.idKey = val;
    }
    set Phone(val: string) {
        this.phone = val;
    }
    set FirstName(val: string) {
        this.firstName = val;
    }
    set LastName(val: string) {
        this.lastName = val;
    }
    set DateOfBirth(val: Date) {
        this.dateOfBirth = val;
    }
    set Description(val: string) {
        this.description = val;
    }



}

