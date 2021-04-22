import {HasFormatter} from "../interfaces/hasFormatter";

export class Invoice implements HasFormatter{
    constructor(
        readonly clientName: string,
        private details: string,
        public amount: number) {
        
    }

    // every class which is implementing the HasFormatter interface must have the format() function
    // the function implementation can be different in each class, but the arguments and return type should be same
    format(){
        return `${this.clientName} owes ${this.amount} for ${this.details}`;
    }
}
