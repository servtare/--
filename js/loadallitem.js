var getUrlString = location.href;
var url = new URL(getUrlString);
var id = url.searchParams.get('id');
fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Item?maxRecords=30&view=Grid%20view',
    {
        headers: { "Authorization": "Bearer keyQQ48dCv3HhtguI" }
    }
)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let table = document.querySelector('#beforebuycar');
        for (index in data.records) {
            var user = data.records[index];
            let row = table.insertRow(-1);
            if (user.fields["Iid"] == id) {
                row.insertCell(0).innerHTML = user.fields['name'];
                row.insertCell(1).innerHTML = '單價:$' + user.fields['price'];
                var amount = document.getElementById('amount').value;
                var price = user.fields['price'];
                var sum = 0;
                sum = price * amount;
                var total = document.getElementById('total');
                total.innerHTML = sum;
            }

        }
    });

function plusamount() {
    fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Item?maxRecords=30&view=Grid%20view',
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
                if (user.fields["Iid"] == id) {
                    var price = user.fields['price'];
                    var amount = document.getElementById('amount').value;
                    if (amount <= 10) {
                        amount++;
                        document.getElementById('amount').setAttribute('value', amount);
                    }
                    var sum = 0;
                    sum = price * amount;
                    var total = document.getElementById('total');
                    total.innerHTML = sum;
                }

            }
        });
}

function minusamount() {
    fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Item?maxRecords=30&view=Grid%20view',
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
                if (user.fields["Iid"] == id) {
                    var price = user.fields['price'];
                    var amount = document.getElementById('amount').value;
                    if (amount > 1) {
                        amount--;
                        document.getElementById('amount').setAttribute('value', amount);
                    }
                    var sum = 0;
                    sum = price * amount;
                    var total = document.getElementById('total');
                    total.innerHTML = sum;
                }

            }
        });
}

function joincar() {
    var x = document.getElementById('beforebuycar').rows.length;
    for (i = 0; i < x; i++) {
        var tr = document.getElementsByTagName('tr')[i];
        var tdl = tr.getElementsByTagName('td').length;
        for (j = 0; j < tdl - 1; j++) {
            var td = tr.getElementsByTagName('td')[j];
            var name= td.innerHTML;
        }
    }
    var amount = document.getElementById('amount').value;
    var total = document.getElementById('total').innerHTML;
    var Xid = 1;
    while (localStorage.getItem('name' + Xid) != null) {
        Xid++;
    }
    localStorage.setItem('name' + Xid, name);
    localStorage.setItem('amount' + Xid, amount);
    localStorage.setItem('total' + Xid, total);
    
    window.location.href="buycar.html";
}
