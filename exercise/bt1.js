submit.onclick = function(){
    let salaryOfDay = document.getElementById('salaryOfDay').value;
    let dayOfWork = document.getElementById('dayOfWork').value;

    let output = salaryOfDay * dayOfWork

    let tagSpanketQua = document.getElementById('total')
    tagSpanketQua.innerHTML = output.toLocaleString() + "vnd"
}