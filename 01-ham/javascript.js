

function tinhTong(a, b) {
    return a + b;
}
function tinhHieu(a, b) {
    return a - b;
}
//tính tổng 2 số 
function tinhTong2(a, b) {
    return a + b;
}
//tính hiệu 2 số
function tinhHieu2(a, b) {
    return a - b;
}
//tính tích hai số
function tinhTich(a, b) {
    return a * b;
}
//tính thương 2 số
function tinhThuong(a, b) {
    if (b == 0) {
        return "không thực hiện được";
    }

    return a / b;

}
// tính bình phương 1 số
function tinhBinhPhuong(a) {


    return Math.pow(a,2);

}
//tính bình phương của 2 số
function tinhBinhPhuong2(a, b) {
    return Math.pow(a,2) && Math.pow(b,2);

}
// tìm số lớn hơn trong 2 số
function timSoLon(a, b) {

    if (a < b) {

        return b;
    } else {
        return a;
    }

}
//tìm số bé
function timSoBe(a, b) {

    if (a > b) {

        return b;
    } else {
        return a;
    }
}
function tinhTrungBinh(a, b) {
    var tb = tinhTong(a, b) / 2;
    return tb;
}
function chiaLayDu(a, b) {
    if (a < b) {

        return b % a;
    } else {
        return a % b;
    }

}
function chiaHet(a, b) {
    if (a % b == 0) {

        return "a chia hết cho  b";
    } else {
        return "a không chia hết cho b";
    }

}
function chiaHet2(a, b) {
    if (b % a == 0) {

        return "b chia hết cho  a";
    } else {
        return "b không chia hết cho a";
    }

}
//tính chu vi hình chữ nhật
function chuViHCN
    (a, b) {
    return (a + b) * 2;
}
//tính diện tích hình chữ nhật
function dienTichHCN
    (a, b) {
    return a*b;
}
// tính chu vi hình tròntròn
function chuViHinhTron(a){
    var cv = 0;
    return cv=2*a*3.14;
   
}
// tính diện tích hình tròntròn
function dienTichHinhTron(a){
    var dt = 0;
    return dt = Math.pow(a,2)*3.14;
}
//////////////////////////////////
//////////////////////////////////
//-------------Chuỗi------------//

// Tạo ra 5 biến s1, s2, s3, s4, s5 chứa 5 chuỗi 
var s5 = "toi không hiểu chính mình";
var s4 = "tôi không hiểu";
var s1 =  "tôi là ai";
var s2 = "không hiểu";
var s3 = " ai hết";
//     1. Viết hàm nối 2 chuỗi . Ví dụ có 2 chuỗi S1, S2 mục tiêu sẽ trả ra một chuỗi gộp của S1 và S2 là S = S1 + S2
function noiChuoi(){
    
    var s = s1.concat(" " ,s2);
    return  s;
}

//     2. Dưa vào hàm nối 2 chuỗi ở 1. Xuất ra màn hình một chuỗi S là gộp của 5 chuỗi S1, S2, S3, S4, S5 
function noi5Chuoi(){
    
    var s = s1.concat(" " ,s2,s3,s4,s5);
    return  s;
}
//     3. Viết hàm in hoa chuỗi truyền vào. 
  function inHoa(){
      
    var text = "Tai lieu hoc JavaScript";
        var a = text.toUpperCase();
        
   return a;
  }
  //     4. Dựa vào hàm in hoa đã làm ở 3. Xuất ra màn hình in hoa của 5 chuỗi S1, S2, S3, S4, S5 và S = S1S2S3S4S5 
  function inHoa5(){
      
        var a = (s1+" "+s2+" "+s3+" "+s4+" "+s5).toUpperCase();
        
   return a;
  }
//     5. Viết hàm kiểm tra chuỗi này có tồn tại trong chuỗi kia hay không.
function kiemTraChuoi(){
    var String1 ="Tôi không yêu em";
    var String2 ="không";
    if(String1.includes(String2)){
        return  "chuỗi 2 có trong chuỗi 1";
    }else{
        return  "chuỗi 2  không có trong chuỗi 1";
    }
}
//     6. Sử dụng hàm 5 để kiểm tra S2 có tồn tại trong S1 không 
function kiemTraChuoiS2InS1(){
    var s1 ="Tôi không yêu em";
    var s2 ="không";
    if(s1.includes(s2)){
        return  "chuỗi s2 có trong chuỗi s1";
    }else{
        return  "chuỗi s2  không có trong chuỗi s1";
    }
}
//     7. sử dụng hàm [s.length] để xuất ra độ dài các chuỗi s1-s5 và độ sài của chuỗi S1S2S3S4S5
function doDoDai(){
      
    var s = (s1+s2+s3+s4+s5).length;
    
return s;
}
//     8. Sử dụng hàm có sẵn [string.substring(begin,end)] để cắt ra một chuỗi con của S1,S2,S3,S4,S5 từ vị trí số 1 tới vị trí số 3
function catChuoi(){
      
    var s = (s1+s2+s3+s4+s5).substring(1,3);
    
return s;
}
//     9. sử dụng hàm có sẵn [string.includes(s)] để xem S1, S2, S3, S4 có tồn tại trong S5 không. Nếu S1 có tồn tịa thì xuất ra màn hình câu "S1 có tồn tại trong S5" nếu không thì xuất ra câu "S1 không tồn tại trong S5". Tương tự đối với S2, S3, S4
function setSuTonTai(){
      
    var S = "tôi là ai , bây giờ tôi muốn đi thật xa nơi mà tôi cũng không biết";
    if(s1.includes(S)){
        return  "chuỗi s1 có trong chuỗi S";
    }else{
        return  "chuỗi s1  không có trong chuỗi S";
    }

    

}


