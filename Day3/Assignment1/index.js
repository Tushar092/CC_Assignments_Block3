var age = 0;

const displayAge = () => {
    console.log(age);
}

const changeAge = (newAge) => {
    return function updateAge() {
        age = newAge;
        console.log(age);
    }
}

displayAge();
let updatedAge = changeAge(17);
updatedAge();