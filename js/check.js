function check() {
    fetch('https://api.airtable.com/v0/appyBFIZr0qBqv83r/Account?maxRecords=30&view=Grid%20view', {
        headers: {
            "Authorization": "Bearer keySg0o0wCxIEGWd5"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var fmail = document.querySelector('#fjumail').value;
            console.log(fmail);
            var checkmail = 0;
            for (var i in data.records) {
                var info = data.records[i];
                if (info.fields['fjumail'] == fmail) {
                    checkmail = 1;
                }
            }

            if (document.form1.studentcode.value == "") {
                alert("請檢查學號是否為空！");
                return false;
            }
            if (document.form1.name.value == "") {
                alert("請檢查姓名是否為空！");
                return false;
            }
            if (document.form1.password.value == "") {
                alert("請檢查密碼是否為空！");
                return false;
            }
            if (document.form1.fjumail.value == "") {
                alert("請檢查信箱是否為空！");
                return false;
            }
            if (document.form1.phone.value == "") {
                alert("請檢查電話是否為空！");
                return false;
            }


            if (checkmail == 0) {
                create();
            } else {
                alert("帳戶已存在！");
                window.location.href = "airtabletest.html";

            }

        });
}