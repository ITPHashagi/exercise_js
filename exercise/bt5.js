let n = parseInt(prompt("Nhập vào số tự nhiên có 2 chữ số:"));

let so_hang_DV = 0;
let so_hang_Chuc = 0;
let total = 0;

so_hang_DV = n % 10;
so_hang_Chuc = Math.floor(n / 10);
total = so_hang_DV + so_hang_Chuc;

console.log("Tổng của số tròn chục và số đơn vị là: " + total);
