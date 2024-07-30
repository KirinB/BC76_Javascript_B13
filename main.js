/*Bài tập 1
Tính Lương với lương một ngày cố định là 100.000
*/

document.getElementById("btnTinhLuong").onclick = () => {
  //Input
  const soNgayLam = document.getElementById("e1_input").value * 1;
  //Handlde
  const tienLuong = soNgayLam * 100000;
  //Output
  document.getElementById("e1_result").innerHTML = tienLuong.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    }
  );
};

/*Bài tập 2
Tính trung bình của 5 số được người dùng nhập vào
*/

document.getElementById("btnTrungBinh").onclick = () => {
  //Input
  const soThu1 = document.getElementById("e2_input1").value * 1;
  const soThu2 = document.getElementById("e2_input2").value * 1;
  const soThu3 = document.getElementById("e2_input3").value * 1;
  const soThu4 = document.getElementById("e2_input4").value * 1;
  const soThu5 = document.getElementById("e2_input5").value * 1;
  //Handle

  const trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  //Output
  document.getElementById(
    "e2_result"
  ).innerHTML = `Giá trị trung bình là: ${trungBinh}`;
};

/*Bài tập 3
Đổi tiền USD sang VNĐ với giá trị quy đổi được cho trước là 23.500 VNĐ
*/

document.getElementById("btnQuyDoiTien").onclick = () => {
  //Input
  const MENH_GIA_CHUYEN_DOI = 23500;
  const tienUSD = document.getElementById("e3_input").value * 1;
  //Handle
  const tienVND = tienUSD * MENH_GIA_CHUYEN_DOI;
  //Output
  document.getElementById("e3_result").innerHTML = tienVND.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    }
  );
};
