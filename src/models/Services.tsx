export class Service{
    id: string;
    serviceName: string;
    duration: number;
  
    constructor(id: string, serviceName: string, duration: number) {
      this.id = id;
      this.serviceName = serviceName;
      this.duration = duration;
    }
}