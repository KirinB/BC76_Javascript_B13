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

/*Bài tập 4
Người dùng nhập chiều dài và chiều rộng tính diện tích chu vi
*/

document.getElementById("btnTinhDTCV").onclick = () => {
  //Input
  const chieuDai = document.getElementById("e4_inputCD").value * 1;
  const chieuRong = document.getElementById("e4_inputCR").value * 1;
  //Handle

  const CHU_VI = (chieuDai + chieuRong) * 2;
  const DIEN_TICH = chieuDai * chieuRong;

  //Output

  document.getElementById(
    "e4_result"
  ).innerHTML = `Chu vi là <span class="text-primary">${CHU_VI}</span>. Diện Tích là <span class="text-danger">${DIEN_TICH}</span>.`;
};

/*Bài tập 5
Nhập số có 2 chữ số tính tổng 2 ký số đó
*/

document.getElementById("btnTinhTong").onclick = () => {
  //Input
  const kySo = document.getElementById("e5_input").value * 1;
  //Handle
  const SO_HANG_DON_VI = kySo % 10;
  const SO_HANG_CHUC = Math.floor(kySo / 10);

  if (10 > kySo || kySo >= 100) {
    alert("Vui lòng nhập số có 2 chữ số");
  } else {
    const TOTAL = SO_HANG_CHUC + SO_HANG_DON_VI;
    //Output
    document.getElementById(
      "e5_result"
    ).innerHTML = `Tổng 2 ký số của ${kySo} là <span class="text-danger">${TOTAL}</span>`;
  }
};
