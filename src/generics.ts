// const names: Array<string> = []; // string[]

// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('This is done!'), 2000)
// })

// promise.then(data => data.split(' '))

//generic constraint
function merge<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max'}, {age: 30});
console.log(mergedObj.age);

//another generic function 

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = 'Got no value.';
    if(element.length === 1){
        descriptionText = 'Got 1 element';
    } else if (element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements';
    }

    return [element, descriptionText];

}

console.log(countAndDescribe(['Sports', 'Cooking']))


// The keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');

// Generic classes

class DataStorage<T extends string | number | boolean>{
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        const index = this.data.indexOf(item);
        if(index === -1 )
            return;
        this.data.splice(index, 1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Max');
textStorage.addItem('Bob');
textStorage.removeItem('Bob');
console.log(textStorage.getItems());

// Generic utility types

interface CourseGoal {
    title: string;
    description: string;
    date: Date
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
