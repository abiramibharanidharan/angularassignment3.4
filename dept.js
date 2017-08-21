var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    //constructor for the derived class and must use super keyword
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    //abstract method derived here
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets every day moring 10am.");
    };
    AccountingDepartment.prototype.createReports = function () {
        console.log("After the Meeting every day create account report");
    };
    return AccountingDepartment;
}(Department));
var PurchaseDepartment = (function (_super) {
    __extends(PurchaseDepartment, _super);
    //constructor for the derived class and must use super keyword
    function PurchaseDepartment() {
        return _super.call(this, "Purchase Department") || this;
    }
    //abstract method derived here
    PurchaseDepartment.prototype.printMeeting = function () {
        console.log("The Purchase Department meets every night 8am .");
    };
    PurchaseDepartment.prototype.createReports = function () {
        console.log("After the Meeting every day create  purchase report");
    };
    return PurchaseDepartment;
}(Department));
var department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
var account = new AccountingDepartment();
account.createReports();
var department1;
department = new PurchaseDepartment();
department.printName();
department.printMeeting();
var purchase = new PurchaseDepartment();
purchase.createReports();
