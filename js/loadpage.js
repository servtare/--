function loadpage(){
    if(localStorage.getItem("fjumail")==null){
        alert("請先登入!");
        window.location.href="login.html";
    }
}

function logout(){
    localStorage.clear();
    window.location.href="login.html";
}