let chieuDai = parseFloat(prompt("Nhập chiều dài:"));
let chieuRong = parseFloat(prompt("Nhập chiều rộng:"));

let S = 0;
let P = 0;

S = chieuDai * chieuRong;
P = (chieuDai + chieuRong) * 2;

console.log("Diện tích hình chữ nhật là: " + S);
console.log("Chu vi hình chữ nhật là: " + P);