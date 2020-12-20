function loadfood() {
    let table = document.querySelector('#loadfood');
    var Xid = 1;
    while (localStorage.getItem('name' + Xid) != null) {
        let row = table.insertRow(-1);
        var food = localStorage.getItem('name' + Xid);
        var amount = localStorage.getItem('amount' + Xid);
        var total = localStorage.getItem('total' + Xid);
        row.insertCell(0).innerHTML = food;
        row.insertCell(1).innerHTML = amount;
        row.insertCell(2).innerHTML = total;
        row.insertCell(3).innerHTML = '<input type="button" value="刪除" onclick="deletefood(this)">';
        Xid++;
    }
    
}

function deletefood(_this) {
    var Xid=_this.parentNode.parentNode.rowIndex+1;
    var Aid=Xid
    while(localStorage.getItem('name'+Aid)!=null){
        Aid++;
    }
    var Vid=Aid-1;
    var tempname=localStorage.getItem('name'+Vid);
    var tempamount=localStorage.getItem('amount'+Vid);
    var temptotal=localStorage.getItem('total'+Vid);
    localStorage.setItem('name'+Xid,tempname);
    localStorage.setItem('amount'+Xid,tempamount);
    localStorage.setItem('total'+Xid,temptotal);
    localStorage.removeItem('name'+Vid);
    localStorage.removeItem('amount'+Vid);
    localStorage.removeItem('total'+Vid);
    location.reload();
}

function totalsum(){
    var table=document.getElementById('loadfood');
    var sum = 0;
    for(i=0;i<table.rows.length;i++){
        sum=sum+parseInt(table.rows[i].cells[2].innerHTML);
    }
    var totalsum = document.getElementById('totalsum');
    totalsum.innerHTML=sum;
}

function backtobuy(){
    window.history.go(-2);
}