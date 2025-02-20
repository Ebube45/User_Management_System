export declare class User {
    id: string;
    FirstName: string;
    LastName: string;
    DateOfBirth: Date;
    Email: string;
    Address: string;
    PhoneNumber: string;
    Role: string;
    CreateAt: Date;
    UpdatedAt: Date;
    IsActive: boolean;
    IsDeleted: boolean;
    constructor(FirstName: string, LastName: string, DOB: Date, Email: string, Address: string, PhoneNumber: string);
}
