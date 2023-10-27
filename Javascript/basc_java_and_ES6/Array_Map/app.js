const data1 = ["Rain","Sunny","Good","Storm"]

const result1 = data1.map((e,i)=>{
    return `วันที่ ${i} มีสภาพอากาศ ${e}`
})

console.log(result1)



const data2 = [
    {day:"01/06/2564",waether:"Sunny",temp:37},
    {day:"02/06/2564",waether:"Rain",temp:25},
    {day:"03/06/2564",waether:"Good",temp:30},
    {day:"04/06/2564",waether:"Storm",temp:25},
]

const result2 = data2.map(e=>{
    return e.waether
})

console.log(result2)