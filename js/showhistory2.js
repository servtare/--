fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Order?maxRecords=30&view=Grid%20view',
    {
        headers: { "Authorization": "Bearer keyQQ48dCv3HhtguI" }
    }
)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let table = document.querySelector('#history0');
        for (index in data.records) {
            var user = data.records[index];
            let row = table.insertRow(-1);
            if (user.fields["studentcode"] == localStorage.getItem('account')) {
                if(user.fields['statement'] == 0){
                    row.insertCell(0).innerHTML = user.fields['name'];
                    row.insertCell(1).innerHTML = user.fields['amount'];
                    row.insertCell(2).innerHTML = user.fields['price'];
                    row.insertCell(3).innerHTML = user.fields['dateandtime'];
                    row.insertCell(4).innerHTML = user.fields['OCid'];
            }
        }

        }
    });