getDataCustomer =(customerName,customerAddress="BKK")=>{
    const address = 
`name : ${customerName}
address : ${customerAddress}`
    return address
}

console.log(getDataCustomer("MR.A","LA"))
console.log(getDataCustomer("MR.B","BKK"))
console.log(getDataCustomer("MR.C"))
console.log(getDataCustomer("MR.D"))