fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Order?maxRecords=30&view=Grid%20view',
    {
        headers: { "Authorization": "Bearer keyQQ48dCv3HhtguI" }
    }
)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (index in data.records) {
            var user = data.records[index];
            var Ocid=user.fields['OCid'];
        }
        if(Ocid==null){
            Ocid=1;
        }else{
            Ocid++
        }
        localStorage.setItem('OCid',Ocid);
    });