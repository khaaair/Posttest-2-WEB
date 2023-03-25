let users = []
let form = document.getElementById('form')


form.addEventListener("submit",function(e) {
    document.getElementById('result').innerHTML=""
    e.preventDefault()
    let usrnm = document.getElementById('daft_nama').value
    let emaill = document.getElementById('daft_email').value
    let pass = document.getElementById('daft_pass').value

    // if (nama == "" || pw == "" || eml == "") {
    //     alert("Harap isi semua kolom");}
    
    let user = {
        username: usrnm,
        email: emaill,
        password: pass
    }

    document.getElementById('daft_nama').value=""
    document.getElementById('daft_email').value=""
    document.getElementById('daft_pass').value=""

    if (localStorage.getItem('users')) {
        users = localStorage.getItem('users')
        users = JSON.parse(users)
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        alert("Congratulations, youre registered !")
        window.location.href = "login.html"
    }
    else {
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        alert("Congratulations, youre registered !")
        window.location.href = "login.html"
   
    }
})
const tombol = document.getElementById("submit");
tombol.onclick = login;
function redirect() {
    window.location.href = 'homepage.html';
}


function login(e){
    const login = document.querySelector('.login');
    e.preventDefault();
    const emailAddress = document.getElementById("emaillgn").value;
    const passWord = document.getElementById("passlgn").value;

    // ngambil nilai array dari localstorage
    const users = JSON.parse(localStorage.getItem("users"));
    // localStorage.setItem("username-logged-in", users[i].username)

    //Periksa apakah array users ada dan tidak kosong
    if (users && users.length) {
    // Melakukan perulangan pada array 
    for (let i = 0; i < users.length; i++) {
        if (emailAddress == users[i].email && passWord == users[i].password) {
            localStorage.setItem("username-logged-in", users[i].username)
            window.location.href="../homepage.html";
            alert("Login Successful !");
            return; 
        }
    }
    }

    // jika salah penginputan
    alert("Invalid Email or Password");
    }

