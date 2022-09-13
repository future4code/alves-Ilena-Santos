import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Preencha todos os campos",404)
    }
}