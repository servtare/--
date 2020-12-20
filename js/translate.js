var fjumail = localStorage.getItem('fjumail');
var account = fjumail.substr(0, 9);
fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Account?maxRecords=30&view=Grid%20view',
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
            if (user.fields['studentcode'] == account) {
                localStorage.setItem('account', user.fields['id'])
            }

        }
    });
