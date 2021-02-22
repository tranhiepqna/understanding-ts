enum Role {ADMIN, READ_ONLY, AUTHOR}

const person: {
    name: string, 
    age: number,
    hobbies: string[],
    role: Role
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
}

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];

favoriteActivities = ["Sports"];

console.log(person.name)