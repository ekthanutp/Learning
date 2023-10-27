class User{
    //Property
    name = "Name"
    password = 1234567

    //parameter constructor
    constructor(n,p){
        this.name = n
        this.password = p

    }

    //Method
    showDetail(){
        console.log(`แบบที่ 1 ชื่อของคุณคือ ${this.name} , พาสเวิดคือ ${this.password}`)
    }
}

const user1 = new User("User1","232323")
user1.showDetail()

//แบบ 2
class User2{
    //Property
    name = "Name"
    password = 1234567

    //parameter constructor
    constructor(n,p){
        this.name = n
        this.password = p
        this.showDetail()

    }

    //Method
    showDetail(){
        console.log(`แบบที่ 2 ชื่อของคุณคือ ${this.name} , พาสเวิดคือ ${this.password}`)
    }
}

const user2 = new User2("User2",34343434)

