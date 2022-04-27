
//====================================================================//

//Tìm số nguyên dương nhỏ nhất

function timSoNguyenDuongNN() {
    var s = 0;
    var n = 1;
    var t = 0
    while (s < 10000) {
        s += n;
        t = n;
        n++;
    }

    document.getElementById("txtSoNDNN").innerHTML = "Số nguyên dương nhỏ nhất: " + t; //+ "   -Tổng là: " + s;
}


//====================================================================//

// Tính tổng

function tinhTong() {
    var x = document.getElementById("txtX").value;
    var n = document.getElementById("txtN").value;
    var t = 0;

    for (i = 1; i <= n; i++) {
        t += Math.pow(x, i);
    }
    document.getElementById("txtTinhTong").innerHTML = "Tổng là: " + t;
}


//====================================================================//

// Tính giai thừa

function tinhGiaiThua() {
    var n = document.getElementById("txtGT").value;
    var gt = 1;

    for (i = 1; i <= n; i++) {

        gt = gt * i;

    }
    document.getElementById("resultGT").innerHTML = n + " !  " + " = " + gt;
}


//====================================================================//

// Tính thẻ

function taoTheDIV() {
    var taoDiv = "";
    for (i = 1; i <= 10; i++)
    taoDiv += i % 2 == 0 ? "<div class='bg-danger text-white p-2'>Div chẵn</div>" : "<div class='bg-primary text-white p-2'>Div lẻ</div>";
    document.getElementById("resultTaoThe").innerHTML = taoDiv;
}

