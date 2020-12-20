function create() {
    //console.log(document.querySelector('#name').value);
    //console.log(document.querySelector('#age').value);

    const user = {
        fields: {
            studentcode: document.querySelector('#studentcode').value,
            name: document.querySelector('#name').value,
            password: document.querySelector('#password').value,

            fjumail: document.querySelector('#fjumail').value,
            phone: document.querySelector('#phone').value,
            //id: document.querySelector('#id').value
        }
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Authorization': 'Bearer keySg0o0wCxIEGWd5',
            'Content-Type': 'application/json'
        }
    }

    //console.log(options);
    fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Account', options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            alert("註冊成功!");
            window.location.href = "login.html"; //redirect to customer_list.html
        });


}
