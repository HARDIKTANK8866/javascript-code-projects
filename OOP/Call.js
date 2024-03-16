function setUsername(username) {
    
    this.setUsername = username
    console.log("called");
}

function creatUser(username,email,password) {
    setUsername.call(this,username)

    this.email = email
    this.password = password
}

const basic = new  creatUser("hardik","h@123","123")
console.log(basic);