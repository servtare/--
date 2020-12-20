var Xid=1;
fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Item?maxRecords=30&view=Grid%20view',
    {
        headers: { "Authorization": "Bearer keyQQ48dCv3HhtguI" }
    }
)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        while(localStorage.getItem('name'+Xid)!=null){
        var food = localStorage.getItem('name'+Xid)
        for (index in data.records) {
            var user = data.records[index];
            if(user.fields['name']== food){
                localStorage.setItem('fname'+Xid,user.fields['ID'])
            }

        }
        Xid++;
    }
    });