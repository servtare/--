function login() {
    fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Account?maxRecords=30&view=Grid%20view',
        {
            headers: { "Authorization": "Bearer keyQQ48dCv3HhtguI" }
        }
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var x=0;
            for (index in data.records) {
                var fjumailInput = document.getElementById('fjumail')
                var passwordInput = document.getElementById('password')
                var user = data.records[index];
                if (fjumailInput.value == user.fields['fjumail'] && passwordInput.value == user.fields['password']) {
                    localStorage.setItem('fjumail',fjumailInput.value);
                    x+=1;
                    break;
                }
            }
            if(x==0){
                alert("login fail!");
            }else{
                window.location.href = "index.html";
            }
        });
}
