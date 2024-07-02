function showDialog() {
    if(postEmail())
        {alert("Спасибо за комментарий!");
    window.location.reload();
}
else
    {alert("Некорректные данные");
}
}

function postEmail() {
    var str = document.getElementById("email").value;
    var nm = document.getElementById("name").value;
    var status = document.getElementById("status");
    var statusName = document.getElementById("statusName");
    var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    var res = true;
    if (re.test(str)) {status.innerHTML = "Адрес правильный";
        res = true;
    }
    else {status.innerHTML = "Адрес неверный";
    if(postEmpty(str)) status.innerHTML = "Поле пустое";
   
        res = false;
    }
    statusName.innerHTML = "Имя правильное"
    if(postEmpty(nm))
        {
            statusName.innerHTML = "Пустое имя";
            res = false;
        }
        return res;
}

    function postEmpty(str){
    return (str == null) || (str.length == 0);
    }