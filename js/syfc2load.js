fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Item?maxRecords=30&view=Grid%20view',
        {
            headers: { "Authorization": "Bearer keyQQ48dCv3HhtguI" }
        }
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let table = document.querySelector('#Item');
            for (index in data.records) {
                var user = data.records[index];
                let row = table.insertRow(-1);
                if(user.fields["RidS"]=='4'){
                    row.insertCell(0).innerHTML = user.fields['name'];
                    row.insertCell(1).innerHTML = '$'+user.fields['price'];
                    var td = row.insertCell(-1);
                    var a =document.createElement('a');
                    var link = document.createTextNode('訂購');
                    a.appendChild(link);
                    a.href="order2.html?id="+user.fields["Iid"];
                    td.appendChild(a);
            }
            }
        });