export class Review{
    username: string;
    rating: number;
    comment: string;

    constructor(username: string, rating: number, comment: string){
        this.username = username;
        this.rating = rating;
        this.comment = comment;
    }
}