function convert() {
    let s = parseInt(document.getElementById("account").value);
    let currency1 = document.getElementById('currency1').value;
    let currency2 = document.getElementById('currency2').value;
    let b;
    if (currency1 == 'Việt Nam Đồng') {
        if (currency2 == 'Đô la Mỹ') {
            b = s / 23000;
        } else if (currency2 == 'Việt Nam Đồng') {
            b= s;
        }
    }
    if (currency1 == 'Đô la Mỹ') {
        if (currency2 == 'Việt Nam Đồng') {
            b = s *23000;
        } else if (currency2 == 'Đô la Mỹ') {
            b = s;
        }
    }
    document.getElementById("result").innerHTML = b ;
}

