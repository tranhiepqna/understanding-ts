class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string){
        // this.id = id;
        // this.name = name;
    }

    describe(this: Department){
        console.log(`Department (${this.id}); ${this.name}`);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

}
