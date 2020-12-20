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
                if(user.fields["FidS"]=='5'){
                if(user.fields["Rid"]=='6'){
                    row.insertCell(0).innerHTML = '<a href="lyfc1.html">'+user.fields['name']+'</a>';
                }
                if(user.fields["Rid"]=='7'){
                    row.insertCell(0).innerHTML = '<a href="lyfc2.html">'+user.fields['name']+'</a>';
                }
                if(user.fields["Rid"]=='8'){
                    row.insertCell(0).innerHTML = '<a href="lyfc3.html">'+user.fields['name']+'</a>';
                }
                }
            }
        });