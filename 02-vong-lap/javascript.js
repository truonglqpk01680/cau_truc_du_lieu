
// 1. Viết hàm xuất ra một tin nhắn, n lần
function xuatTinNhan(n) {

    tinnhan = "<br> xin chào mọi người!";
    chuoiTinNhan = [];
    for (var index = 1; index <= n; index++) {
        chuoiTinNhan.push(tinnhan);

    }

    return chuoiTinNhan;
}

// 2. Sử dung hàm (1) xuất ra 10 lần dòng chữ "Hôm nay trời đẹp quá"
function xuatRaDongChu(n) {

    tinnhan = "<br> Hôm nay trời đẹp quá";
    chuoiTinNhan = [];
    for (var index = 1; index <= n; index++) {
        chuoiTinNhan.push(tinnhan);

    }

    return chuoiTinNhan;
}
// 4. Sử dụng hàm (3) tính toán tổng từ 1 tới 100; tính toán tổng từ 1 tới 500
function tinhTongTu1Toi500(a) {
    var tong = 0;
    for (var i = 0; i <= a; i++) {

        tong = tong + i;
    }
    return tong;
}

// 6. Sử dụng hàm (5) tính toán tổng từ 1 tới 100; tính toán tổng từ 20 tới 76
function tinhTong20Toi76(a, b) {
    var tong = 0;
    for (let index = a; index <= b; index++) {
        tong = tong + index;

    }
    return tong;
}
// 7. Viết hàm tính tổng tất cả các số lẻ từ a tới b 
function tinhTongSoLeTuAToiB(a, b) {
    var tong = 0;

    for (let index = a; index <= b; index++) {
        if (index % 2 != 0) {
            tong = tong + index;
        }


    }
    return tong;
}
// 8. Sử dụng hàm (7) tính toán tổng từ 1 tới 100; tính toán tổng từ 20 tới 76
function tinhTongTu1Toi100(a, b) {
    var tong = 0;

    for (let index = 1; index <= 100; index++) {
        if (a <= index <= b) {
            tong = tong + index;
        }




    }
    return tong;
}

// 10. Sử dụng hàm (9) xuất ra 100 số lẻ gần nhất 
function xuatSoLeGanNhat(n) {
    var mangSoLe = [];
    var a = 1;
    while (mangSoLe.length < n) {
        if (a % 2 != 0) {
            mangSoLe.push(a);

        }
        a++;
    }

    return mangSoLe;
}
// 12. Sử dụng hàm (11) xuất ra 57 số lẻ gần nhất bắt đầu từ 1005
function xuat57SoLeTu1005(n, m) {
    var mangNToM = [];

    var a = m;
    while (mangNToM.length < n) {
        if (a % 2 != 0) {
            mangNToM.push(a);

        }
        a++;
    }

    return mangNToM;
}
// 13. Viết hàm kiểm tra một số có phải là số nguyên tố hay không? Biết số nguyên tố là số chia hết cho một và chính nó.
function kiemTraSoNguyenTo(a) {
    if (a < 2) {
        return false;

    }
    for (i = 2; i < (a - 1); i++) {
        if (a % i == 0) {
            return false;

        }
    }

    return true;




}

// 14. Viết hàm xuất ra n số nguyên tố nhỏ nhất. 
function xuatNSoNguyenToBeNhat(n) {
    var mangSoNgTo = [];
    var a = 2;

    while (mangSoNgTo.length < n) {

        if (kiemTraSoNguyenTo(a)) {
            mangSoNgTo.push(a);
        }
        a++;

    }
    return mangSoNgTo;
}
// 15. Sử dụng hàm (14) xuất ra 20 số nguyên tố nhỏ nhất.
function xuat20SoNguyenToBeNhat(n) {
    var mangSoNgTo = [];
    var a = 2;

    while (mangSoNgTo.length < n) {

        if (kiemTraSoNguyenTo(a)) {
            mangSoNgTo.push(a);
        }
        a++;

    }
    return mangSoNgTo;
}

// 16. Viết hàm xuất ra n số nguyên tố nhỏ nhất bắt đầu từ m
function xuatNSoNguyenTuM(n, m) {

    var mangSoNguyenTuM = [];

    var a = m;

    while (mangSoNguyenTuM.length < n) {


        if (kiemTraSoNguyenTo(a)) {
            mangSoNguyenTuM.push(a);

        }
        a++;

        
    }
    return mangSoNguyenTuM;
}
    // 17. Sử dụng hàm (16) xuất ra 20 số nguyên tô nhỏ nhất bắt đầu từ 1000
function xuat20SoNguyenToTu1000(c,d){
    
    var daySoNguyen = [];
    var m = d;
    while(daySoNguyen.length<c){

        if(xuatNSoNguyenTuM(c,m)){

            daySoNguyen.push(m);

        }
        m++;
    }


    return daySoNguyen;

}

    //3. tính tổng từ 1 tới n
    function tinhTongTrongKhoang(a) {
        var tong = 0;
        for (var i = 0; i < a; i++) {

            tong = tong + i;
        }
        return tong;
    }
    //5. viết hàm tính tổng từ a tới b
    function tinhTongAToB(a, b) {
        var tong = 0;
        for (let index = a; index <= b; index++) {
            tong = tong + index;

        }
        return tong;
    }
    //9. viết hàm xuất ra n số lẻ nhỏ nhất
    function xuatSoLeNhoNhat(n) {
        var mangSoLe = [];
        var a = 1;
        while (mangSoLe.length < n) {
            if (a % 2 != 0) {
                mangSoLe.push(a);

            }
            a++;
        }

        return mangSoLe;
    }
    //11. viết hàm xuất ra n số lẻ từ m
    function xuatSoLeNToM(n, m) {
        var mangNToM = [];

        var a = m;
        while (mangNToM.length < n) {
            if (a % 2 != 0) {
                mangNToM.push(a);

            }
            a++;
        }

        return mangNToM;
    }


