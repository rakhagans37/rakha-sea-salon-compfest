export class Reservation{
    name: string;
    dateTime: number;
    
    service: string;
    constructor(name: string, dateTime: number, service: string){
        this.name = name;
        this.dateTime = dateTime;
        this.service = service;
    }
}