class User {
 constructor (username,email,password,){
   this.username = username, this.email = email, this.password = password;
  }
  
  passwordencryption(){
    return '${this.password}abc';
  }
  static getDetails(items){
    let mail = items.email;
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return mailRegex.test(mail);
  }

};


const john = new User('john doe','abc@gamail.com','abc');
console.log(User.getDetails(john));
console.log("prototype of john is" + Object.getPrototypeOf(john));

console.log(john);
console.log(john.passwordencryption());