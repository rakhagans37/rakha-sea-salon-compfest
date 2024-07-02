export class User{
    id: string;
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: "Customer" | "Admin";

    constructor(id: string, fullName: string, email: string, password: string, role: "Customer" | "Admin", phoneNumber: string){
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.phoneNumber = phoneNumber;
    }
}

export class Admin extends User{
    constructor(id: string, fullName: string, email: string, password: string, phoneNumber: string){
        super(id, fullName, email, password, "Admin", phoneNumber);
    }
}