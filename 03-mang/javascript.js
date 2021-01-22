
// // Bài tập


 // 1. Tạo một mảng chứa các số từ 1 tới 10
 var mangSo= new Array(1,2,3,4,5,6,7,8,9,10)
function listNumber(n) {
  let listNumber = [];
  for (let index = 0; index <= n; index++) {
      listNumber.push(index);
  }


  return listNumber;
}
// 2. Tạo một mảng lưu trữ sở thích cá nhân
var soThich=  new Array("Chơi game","đánh cầu lông","bóng đá")
function listFavorite() {
  let listFavorite = ["Bóng đá", "Bóng chuyền", "Cầu lông", "Cờ vua", "Bóng bàn"];
  return listFavorite;
}
//4. Xuất mảng (2) ra console.log
console.log(soThich)
 // 3. Xuất mảng (1) ra console.log
console.log(mangSo)
 // 5. Viết hàm trả ra danh sách n số nhỏ hơn n
function getLessThan(n) 
{
  let list = [];
  for (let index = 0; index < n; index++) {
      if (index < n) {
          list.push(index);
      }
  }
  return list;
}

 // 6. Sử dụng hàm (5) xuất ra console danh sách các số nhỏ hơn 100 

 // 7. Viết hàm trả ra danh sách tất cả các số lẻ nhỏ hơn n
function getOddLessThan(n) {

  let list = [];
  for (let index = 0; index < n; index++) {
      if (index < n && index % 2 == 1) {
          list.push(index);
      }
  }
  return list;
}
// 8. Sử dụng hàm (7) xuất ra console danh sách toàn bộ số lẻ <1000

// 9. Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng 
function findFirst(arr, chuoiCanTim) {

  return (arr.indexOf(chuoiCanTim))+1;
}
// 10. Sử dụng hàm (9).
function findLast(arr, chuoiCanTim) {
  let array = arr;
  return array.lastIndexOf(chuoiCanTim) + 1;
}
// 11. Viết hàm tìm ra vị trí phần tử cuối cùng nằm trong mảng 
var arr = new Array("hôm nay tôi buồn")
var chuoiCanThem = "lắm"
function findLast(arr, chuoiCanTim) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == chuoiCanTim) {
            return i + 1;
        }
    }
}

// 13. Viết hàm tìm ra vị trí tất cả phần tử nằm trong mảng 

function find(arr, chuoiCanTim) {
    var number = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == chuoiCanTim) {
            number.push(i + 1);
        }
    }
    return number;
}
// 15. Viết hàm thêm một phần tử vào mảng 

function add(arr, chuoiCanThem) {
    arr.push(chuoiCanThem);
    return arr;
}

// 17. Viết hàm thêm một phần tử vào mảng, nhưng nếu phần tử đó đã tồn tại thì ko thêm nữa.

function addIfNotExist(arr, chuoiCanThem) {
    if (arr.indexOf(chuoiCanThem) < 0) {
        arr.push(chuoiCanThem);
    }
    return arr;
}

// 19. Viết hàm xoá toàn bộ phần tử ra khỏi mảng 

function xoaPhanTu(arr, chuoiCanXoa) {
    return arr.filter(function(e)
     { 
      return e !== chuoiCanXoa })
     

}