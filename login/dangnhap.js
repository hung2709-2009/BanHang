function Checkdangnhap() {
    var users = document.getElementById('exampleInpsqutEmail1').value
    var passw = document.getElementById('exampleInputPassword1').value

    console.log(users, passw);
    if (users == user.email && passw == user.pass) {
        alert("Thành Công")
        window.location.href = "../trangchu/index.html"

    }
    else {
        console.log("thất bại");
    }
}


var user = {
    email: "hung",
    pass: "123456"
}
var btn = document.getElementById('btn')
btn.onclick = () => {


    Checkdangnhap()
}