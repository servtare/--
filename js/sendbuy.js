function sendbuy() {
  var Xid = 1;
  while (localStorage.getItem('name' + Xid) != null) {
    const user = {
      fields: {
        studentcode: [localStorage.getItem('account')],
        Iid: [localStorage.getItem('fname' + Xid)],
        amount: parseInt(localStorage.getItem('amount' + Xid)),
        price: parseInt(localStorage.getItem('total' + Xid)),
        OCid: parseInt(localStorage.getItem('OCid')),
        statement: 0
      }
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Authorization': 'Bearer keyQQ48dCv3HhtguI',
        'Content-Type': 'application/json'
      }

    }
    fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Order/', options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    Xid++;
  }
  
  var Zid=1;
  while(localStorage.getItem('name'+Zid)!=null){
    localStorage.removeItem('name'+Zid);
    localStorage.removeItem('amount'+Zid);
    localStorage.removeItem('total'+Zid);
    localStorage.removeItem('fname'+Zid);
    localStorage.removeItem('OCid'+Zid);
    Zid++;
  }
  window.setTimeout("window.location='history.html'",1000); 
}
