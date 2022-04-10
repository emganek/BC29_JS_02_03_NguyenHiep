var currencyFormat = new Intl.NumberFormat("vn-VN")

/*Bài tập 1
- Đầu vào:
    + Lương 1 ngày.
    + Số ngày làm.
- Xử lý:
    + Tiền lương = Lương 1 ngày * Số ngày làm
- Đầu ra:
    + Tiền lương
*/
document.getElementById("btn-1").onclick = function(){
var luong1Ngay = parseInt(document.getElementById("luong1Ngay").value);
var soNgayLam = parseInt(document.getElementById("soNgayLam").value);
var totalSalary = luong1Ngay * soNgayLam;

document.getElementById("totalSalary").innerHTML = "Số lương của " + soNgayLam +" ngày làm là: " + currencyFormat.format(totalSalary);

document.getElementById("totalSalary").style.color= "red";
}
// --------------------------------------------------------------------------------------

/*Bài tập 2
- Đầu vào:
    + Số thứ 1.
    + Số thứ 2.  
    + Số thứ 3.
    + Số thứ 4. 
    + Số thứ 5.  
- Xử lý:
    + Giá trị trung bình = (Số thứ 1 + Số thứ 2 + Số thứ 3 + Số thứ 4 + Số thứ 5)/5
- Đầu ra:
    + Giá trị trung bình
*/
document.getElementById("btn-2").onclick = function(){
var value1 = parseFloat(document.getElementById("value1").value);
var value2 = parseFloat(document.getElementById("value2").value);
var value3 = parseFloat(document.getElementById("value3").value);
var value4 = parseFloat(document.getElementById("value4").value);
var value5 = parseFloat(document.getElementById("value5").value);
var avgValue = (value1+value2+value3+value4+value5)/5;

document.getElementById("avgValue").innerHTML = "Giá trị trung bình của 5 số là: " + avgValue;
document.getElementById("avgValue").classList.add("outputFormat");
}

// --------------------------------------------------------------------------------------

/*Bài tập 3
- Đầu vào:
    + Tỷ giá chuyển đổi từ USD sang VND.
    + Số lượng USD.  
- Xử lý:
    + Số tiền sau khi quy đổi sang VND = Số lượng USD * Tỷ giá chuyển đổi USD sang VND
- Đầu ra:
    + Số tiền sau khi quy đổi sang VND
*/
document.getElementById("btn-3").onclick = function(){
var tyGia = parseInt(document.getElementById("tyGia").value);
var slUSD = parseInt(document.getElementById("slUSD").value);;
var slVND = tyGia*slUSD;

document.getElementById("slVND").innerHTML = "Giá trị sau khi chuyển đổi sang VND là: " + currencyFormat.format(slVND) + "VND";
document.getElementById("slVND").classList.add("outputFormat");
}

// --------------------------------------------------------------------------------------

/*Bài tập 4
- Đầu vào:
    + Chiều rộng hình chữ nhật.
    + Chiều dài hình chữ nhật.  
- Xử lý:
    + Chu vi hình chữ nhật = (Chiều rộng hình chữ nhật + Chiều dài hình chữ nhật)*2
    + Diện tích hình chữ nhật = Chiều dài hình chữ nhật * Chiều rộng hình chữ nhật
- Đầu ra:
    + Chu hình hình chữ nhật
    + Diện tích hình chữ nhật
*/
document.getElementById("btn-4").onclick = function(){
var chieuDai = parseFloat(document.getElementById("chieuDai").value);
var chieuRong = parseFloat(document.getElementById("chieuRong").value);;
var chuVi = (chieuDai+chieuRong)*2;
var dienTich = chieuDai*chieuRong;

document.getElementById("chuVi").innerHTML = "Hình chữ nhật có chu vi là: " + chuVi + " cm";
document.getElementById("chuVi").classList.add("outputFormat");
document.getElementById("dienTich").innerHTML = "Hình chữ nhật có diện tích là: " + dienTich + " cm2";
document.getElementById("dienTich").classList.add("outputFormat");
}

// --------------------------------------------------------------------------------------

/*Bài tập 5
- Đầu vào:
    + Số có 2 chữ số (68)
- Xử lý:
    + Chữ số hàng chục  = Số có 2 chữ số chia lấy phần nguyên với 10
    + Chữ số hàng đơn vị  = Số có 2 chữ số chia lấy phần dư với 10
    + Tổng 2 chữ số = Chữ số hàng chục + Chữ số hàng đơn vị
- Đầu ra:
    + Tổng 2 chữ số
*/
document.getElementById("btn-5").onclick = function(){
var soNhapVao = parseInt(document.getElementById("soNhapVao").value);
var chuSoDv = soNhapVao%10;
var chuSoChuc = Math.floor(soNhapVao/10);
var tongKy = chuSoDv + chuSoChuc;

document.getElementById("tongKy").innerHTML = "Tổng 2 chữ số bằng: "+ tongKy;
document.getElementById("tongKy").classList.add("outputFormat");
}
// --------------------------------------------------------------------------------------