function Logger(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor)
    }
}

function WithTemplate(template: string,hookId: string ){
    return function(constructor: any){
        console.log('WithTemplate')
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>Person Object</h1>', 'app')
@Logger('LOGGING - PERSON')
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object...')
    }
}

const pers = new Person()
console.log(pers)

// ---

function Log(target: any, propertyName: string){
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, description: PropertyDescriptor){
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(description);
}

function Log3(target: any, name: string | Symbol, description: PropertyDescriptor){
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(description);
}

function Log4(target: any, name: string | Symbol, position: number){
    console.log('Paramter accessor!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number){
        if(val >0){
            this._price = val
        } else {
            throw new Error('Invalid price - should be positive!')
        }

    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWidthTax(@Log4 tax: number){
        return this._price * (1 + tax);
    }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod  = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }

    return adjDescriptor;
}

class Printer {
    message = 'This works!';

    @Autobind
    showMessage(){
        console.log(this.message)
    }
}

const p = new Printer();

const button = document.querySelector('button')!;

button.addEventListener('click', p.showMessage)