class User{
    //Property
    #name //#คือตั้ง Private ไม่สามารถเข้าถึงค่าได้จากภายนอก Class
    #password

    //parameter constructor
    constructor(name,password){
        this.#name = name
        this.#password = password

    }

    //Method
    showDetail(){
        console.log(`ชื่อของคุณคือ ${this.#name} , พาสเวิดคือ ${this.#password}`)
    }
    
    //setter method
    set Name(newName){
        this.#name = newName
    }
    //getter method
    get Name(){
        return this.#name
    }
    
    //setter method
    set Password(newPassword){
        this.#password = newPassword
    }
    //getter method
    get Password(){
        return this.#password
    }
}

//สร้าง object
const user1 = new User("LDS","232323")
user1.Name = "BANK"
user1.Password = 12314
console.log(user1.Name)
console.log(user1.Password)
