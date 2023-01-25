const inputBox = document.getElementById("inputBox");
const bottom = document.getElementById("bottom");
function clearPage(){
    console.log("clear");
    bottom.innerHTML = "";
    inputBox.value = ""
}
async function search(){
    bottom.innerHTML = "";
    const api = fetch(`https://api.github.com/search/users?q=${inputBox.value}`)
    const Response = await api
    const data = await Response.json()
    // console.log(data.items);
    data.items.map((ele)=>{
        console.log(ele.html_url);
        bottom.innerHTML += `
        <div class="card">
        <img src="${ele.avatar_url}" alt="" id="img">
        <div id="details">
            <h5 id="name">${ele.login}</h5>
            <a href="${ele.html_url}" id="link">View Profile</a>
        </div>
       </div> `
    })
    inputBox.value = "";
    // window.location.reload()
}
async function home(){
    // console.log("home");
    bottom.innerHTML = "";
    const Response = await fetch("https://api.github.com/users");
    const data = await Response.json();
    // console.log(data);
    data.map((ele)=>{
        // console.log(ele.login);
        bottom.innerHTML += `
        <div class="card">
        <img src="${ele.avatar_url}" alt="" id="img">
        <div id="details">
            <h5 id="name">${ele.login}</h5>
            <a href="${ele.html_url}" id="link">View Profile</a>
        </div>
       </div> `
    })
    inputBox.value = ""
}
home()
// window.history.forward(-1);
