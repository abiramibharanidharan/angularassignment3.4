abstract class Department
{

    constructor(public name: string){}
    printName(): void
    {
        console.log("Department name: " + this.name);
    }
    //abstract method 
    abstract printMeeting(): void; 
}
class AccountingDepartment extends Department
{
    //constructor for the derived class and must use super keyword
    constructor()
    {
        super("Accounting and Auditing"); 
    }
    //abstract method derived here
    printMeeting(): void
    {
        console.log("The Accounting Department meets every day moring 10am.");
    }
    createReports(): void {
        console.log("After the Meeting every day create account report");
    }
}
class PurchaseDepartment extends Department
{
    //constructor for the derived class and must use super keyword
    constructor()
    {
        super("Purchase Department"); 
    }
    //abstract method derived here
    printMeeting(): void
    {
        console.log("The Purchase Department meets every night 8am .");
    }
    createReports(): void {
        console.log("After the Meeting every day create  purchase report");
    }
}
let department: Department
department = new AccountingDepartment()
department.printName();
department.printMeeting();
let account=new AccountingDepartment()
account.createReports()
let department1:Department
department=new PurchaseDepartment()
department.printName()
department.printMeeting()
let purchase=new PurchaseDepartment()
purchase.createReports()