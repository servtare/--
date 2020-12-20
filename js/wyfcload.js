fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Restaurant?maxRecords=30&view=Grid%20view',
        {
            headers: { "Authorization": "Bearer keyQQ48dCv3HhtguI" }
        }
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let table = document.querySelector('#Restaurant');
            for (index in data.records) {
                var user = data.records[index];
                let row = table.insertRow(-1);
                if(user.fields["FidS"]=='1'){
                if(user.fields["Rid"]=='1'){
                    row.insertCell(0).innerHTML = '<a href="wyfc1.html">'+user.fields['name']+'</a>';
                }
                if(user.fields["Rid"]=='2'){
                    row.insertCell(0).innerHTML = '<a href="wyfc2.html">'+user.fields['name']+'</a>';
                }
                }
            }
        });