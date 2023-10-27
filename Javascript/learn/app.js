class User {
  //Property
  _name; //#คือตั้ง Private ไม่สามารถเข้าถึงค่าได้จากภายนอก Class
  #password;

  //parameter constructor
  constructor(name, password) {
    this._name = name;
    this.#password = password;
  }

  //Method
  showDetail() {
    console.log(`ชื่อของคุณคือ ${this._name} , พาสเวิดคือ ${this.#password}`);
  }

  //setter method
  set Name(newName) {
    this._name = newName;
  }
  //getter method
  get Name() {
    return this._name;
  }

  //setter method
  set Password(newPassword) {
    this.#password = newPassword;
  }
  //getter method
  get Password() {
    return this.#password;
  }
}

class Teacher extends User {
    #course
    constructor(name,password,course){
        super(name,password) //อ้างอิงไป constructer แม่ ไม่งั้นจะเรียกใช้งานไม่ได้
        this.#course = course
        
    }

    showDetail(){
        console.log(`i'm ${this._name} , i'm teach in ${this.#course}`)
    }
}

class Student extends User{
    #score
    constructor(name,password,score){
        super(name,password) //อ้างอิงไป constructer แม่ ไม่งั้นจะเรียกใช้งานไม่ได้
        this.#score = score
        
    }

    showDetail(){
        console.log(`i'm ${this._name} , my score is ${this.#score}`)
    }
}

const user1 = new Teacher("Kru Pen Sri",1234,"Math")
const user2 = new Teacher("Kru Sri Smon",5678,"ENG")
user1.showDetail()
user2.showDetail()
const user3 = new Student("nakrean",456,"100")
const user4 = new Student("huagrean",789,"80")
user3.showDetail()
user4.showDetail()