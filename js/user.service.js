
const url = "http://localhost:52245/api/users";

const userlist = () => {
    $.getJSON(url)
        .done( (res) => { //what to do when data returns. res only exists in block
            console.log(res);
            refresh(res);      //pass in res (list of users)  
        });
};

const userdetail = (id) => {  //fucntion takes id param, calss JSON +/ +id, returns single user
    $.getJSON(`${url}/${id}`)
        .done( (res) => {    //done method puts data in res, passes data to refresh, which paints data in html
            console.log(res);
            refresh(res);       
        });
};