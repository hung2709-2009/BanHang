var email = document.getElementById("exampleInputEmail1").value;
var password = document.getElementById("exampleInputPassword1").value;
var btnReg = document.getElementById("btn-reg");
btnReg.addEventListener("click", function () {
  createUserWithEmailAndPassword(auth, email.value, password.value).then(
    asnyc(userC)
  );
});

function Checkdangki() {
  console.log(user, pass);
  if (users == user.email && passw == user.pass) {
    alert("Thành Công");
    window.location.href = "../trangchu/index.html";
  } else {
    console.log("thất bại");
  }
}

var user = {
  email: "hung",
  pass: "123456",
};
var btn = document.getElementById("btn");
btn.onclick = () => {};
