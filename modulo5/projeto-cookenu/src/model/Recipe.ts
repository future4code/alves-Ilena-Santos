export default class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private date: string,
        private creator: string
    ){}

    public getId(){
        return this.id
    }
    public getTitle(){
        return this.title
    }
    public getDescription(){
        return this.description
    }
    public getDate(){
        return this.date
    }
    public getCreator(){
        return this.creator
    }
}