const arr = [];
function nhapSo() {
  var so = document.getElementById("so").value * 1;
  if (so == null) {
    alert("Bạn chưa nhập số");
  } else {
    arr.push(so);
    document.getElementById("so").value = null;
  }
  document.querySelector(".chuoi").innerHTML = arr;
}

// todo: tính tổng dương:
function tinhTongDuong() {
  var tong = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      tong += arr[i];
    }
  }
  document.querySelector(".bT1").innerHTML = "Tổng số dương: " + tong;
}

// todo: đếm số dương
function demSoDuong() {
  var s = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      s++;
    }
  }
  document.querySelector(".bT2").innerHTML = "Tổng số dương: " + s;
}

//todo: tìm số nhỏ nhất
function timSoNhoNhat() {
  var s = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < s) {
      s = arr[i];
    }
  }
  document.querySelector(".bT3").innerHTML = "Số nhỏ nhất: " + s;
}

// todo: tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
  var s = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < s && arr[i] > 0) {
      s = arr[i];
    }
  }
  if (s < 0) {
    document.querySelector(".bT4").innerHTML = "Không có số dương nào!!!";
  } else {
    document.querySelector(".bT4").innerHTML = "Số dương nhỏ nhất: " + s;
  }
}

// todo: Tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
  var s = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      s = arr[i];
    }
  }
  if (s % 2 == 0) {
    document.querySelector(".bT5").innerHTML = "Số chẵn cuối cùng: " + s;
  } else {
    document.querySelector(".bT5").innerHTML = "Không có số chẵn nào!!!";
  }
}

// todo: đổi chỗ
function doiCho() {
  var vt1 = document.getElementById("vt1").value * 1;
  var vt2 = document.getElementById("vt2").value * 1;
  var flag = arr[vt2];
  arr[vt2] = arr[vt1];
  arr[vt1] = flag;
  document.querySelector(".bT6").innerHTML = "Mảng sau khi biến đổi: " + arr;
}

// todo: sắp xếp
function soSanh(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

function sapXep() {
  document.querySelector(".bT7").innerHTML =
    "Mảng sau khi sắp xếp: " + arr.sort(soSanh);
}

// todo: Tìm số nguyên tố đầu tiên
function timSoNguyenToDauTien() {
  for (var i = 0; i < arr.length; i++) {
    var s = 0;
    for (var j = 1; j <= arr[i]; j++) {
      if (arr[i] % j == 0 && arr[i] > 1) {
        s++;
      }
    }
    if (s == 2) return "Số nguyên tố đầu tiên là: " + arr[i];
  }
  return "Mảng không có số nguyên tố!!!";
}

function timSoNT() {
  document.querySelector(".bT8").innerHTML = timSoNguyenToDauTien();
}

// todo: Đếm số nguyên
const arrNew = [];
function nhapMang() {
  var soMoi = document.getElementById("soMoi").value * 1;
  if (soMoi == null) {
    alert("Bạn chưa nhập số");
  } else {
    arrNew.push(soMoi);
    document.getElementById("soMoi").value = null;
  }
  document.querySelector(".mang").innerHTML = arrNew;
}
function demSoNguyen() {
  var s = 0;
  for (var i = 0; i < arrNew.length; i++) {
    if (Number.isInteger(arrNew[i]) == True) {
      s++;
    }
  }
  document.querySelector(".bT9").innerHTML = "Số nguyên trong mảng: " + s;
}

// todo: so sánh số lượng số âm và số dương
function demSo() {
  var s = 0;
  for (var i = 0; i < arrNew.length; i++) {
    if (arrNew[i] > 0) {
      s++;
    } else if (arrNew[i] < 0) {
      s--;
    }
  }
  if (s > 0) return "số dương > số âm";
  if (s < 0) return "số âm > số dương";
  return "số âm = số dương";
}

function soSanh() {
  document.querySelector(".bT10").innerHTML = demSo();
}
