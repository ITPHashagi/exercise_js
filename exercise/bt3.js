change.onclick = function () {
  let tienDo = document.getElementById("tienDo").value;
  let tienViet = 23500;

  let output = tienDo * tienViet;
  let tagSpanChuyenDoi = document.getElementById('daChuyenDoi')
  tagSpanChuyenDoi.innerHTML = output.toLocaleString() + " vnd";
};
