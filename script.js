var url = "https://61d28671da87830017e5952d.mockapi.io/users";

function getdata(){
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));
}

function createdata(){
    let data = {
        name: "john doe",
        email: "abc@guvi.com"
    };
    fetch(url, {
        method: "POST",
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json;charset=UTF-8",
        }
    }).then((resp)=>resp.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));
}


function updatedata(){
    let data = {
        name: "john doe",
        email: "abc@guvi.com"
    };
    fetch(url+"/5", {
        method: "PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json;charset=UTF-8",
        }
    }).then((resp)=>resp.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));
}

function deletedata(){
    fetch(url+"/2", {
        method: "DELETE"
    }).then((resp)=>resp.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));
}
