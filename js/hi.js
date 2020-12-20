function identify() {
    if (localStorage.getItem("fjumail") == null) {
        alert("請先登入");
        window.location.href = "login.html";
    } else {
        alert("你好 " + localStorage.getItem("fjumail"));
    }
}

function clearlocalStorage() {
    localStorage.clear();
    alert("清除資料完成");
}
function clearfood() {
    for(i=0;i<20;i++){
        localStorage.removeItem('name'+i);
        localStorage.removeItem('amount'+i);
        localStorage.removeItem('total'+i);

    }
}
function showfood() {
    var Xid = 1;
    while (localStorage.getItem('name' + Xid != null)) {
        alert(localStorage.getItem('name' + Xid, user.fields['name']));
        alert(localStorage.getItem('amount' + Xid, amount));
        alert(localStorage.getItem('total' + Xid, total));
    }
}