abstract class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string){
        // this.id = id;
        // this.name = name;
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    abstract describe(this: Department): void

}

class ITDepartment extends Department {
    private lastReport: string;

    private static instance: ITDepartment;
    
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found!');
    }   

    set mostRecentReport(value: string){
        if(!value){
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    static getInstance(){
        if(ITDepartment.instance){
            return this.instance;
        }
        this.instance = new ITDepartment("ID2", []);
        return this.instance
    }

    constructor(id: string, private reports: string[]){
        super(id, 'IT');
        this.lastReport = reports[0];
    }

    addEmployee(name: string){
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    describe(){
        console.log("IT department ID: " + this.id)
    }
}

const itDepartment1 = ITDepartment.getInstance();
const itDepartment2 = ITDepartment.getInstance();

console.log(itDepartment1, itDepartment2);