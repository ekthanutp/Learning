const data = [1,2,3,4,5]
let total = 0


data.forEach(e => {
    console.log(`สมาชิกใน Array Data = ${total+=e}`)
});


for (const elem of data){
    if (elem > 3) break;
    console.log(`สมาชิกใน Array Data = ${total+=elem}`)
}