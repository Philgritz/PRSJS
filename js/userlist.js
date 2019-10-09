function refresh(users) { //refresh can call users, collection of users
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for(var user of users) {

        //if(!user.isAdmin) {
            //continue;

        
       
        var tr = "<tr>";   
        tr += `<td>${user.id}</td>`
        tr += `<td>${user.username}</td>`
        tr += `<td>${user.firstname}</td>`
        tr += `<td>${user.lastname}</td>`
        tr += `<td>${user.isReviewer ? "Yes" : "No"}</td>`
        tr += `<td>${user.isAdmin ? "Yes" : "No"}</td>`
        tr += "</tr";
        tbodyCtrl.innerHTML += tr;
    }
}
const getUsers = () => {
    userlist();
}







// //use refresh function to call another function
// const getUsers = () => {
//     let url = "http://localhost:52245/api/users";
//     $.getJSON(url)
//         .done( (res) => { //what to do when data returns. res only exists in block
//             console.log(res);
//             refresh(res)      //pass in res (list of users)  
//         })
// };









var xusers = [
{
    "id": 1,
    "username": "adm",
    "password": "adm",
    "firstname": "Normal",
    "lastname": "Admin",
    "phone": "513-555-1212",
    "email": "help@admin.com",
    "isReviewer": true,
    "isAdmin": true
},
{
    "id": 2,
    "username": "user",
    "password": "user",
    "firstname": "Normal",
    "lastname": "User",
    "phone": "",
    "email": "",
    "isReviewer": false,
    "isAdmin": false
},
{
    "id": 3,
    "username": "sa",
    "password": "sa",
    "firstname": "System",
    "lastname": "Admin",
    "phone": "",
    "email": "",
    "isReviewer": true,
    "isAdmin": true
}
]
// Collapse









// Message dotnet_2019_08_19_apprenti


// Thread
// dotnet_2019_08_19_apprenti