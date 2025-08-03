async function getData () {
    var response = await fetch("https://jsonplaceholder.typicode.com/users");
    userDetails = await response.json();
    userDetails.forEach(element => {
        console.log(element.username);
    });
}

// let userNames = getData();
// console.log(userNames);
// userNames.forEach(element => {
//     console.log(element.username);
// });

getData();