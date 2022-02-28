let fruits = ["apple", "banana", false, 13, "hello", ["1", "2", "3"], {name: "peter" , lastname: "parker"}, 12345]
fruits.forEach((item=>{
  console.log(typeof(item)); 
}))
// fruits.forEach(element => console.log(element));

let people = [{
  name:"Peter",
  lastname:"parker",
  age: 34
},
{
  name:"Lasley",
  lastname: "Johnson",
  age: 55
},
{
  name: "sam",
  lastname: "cruz",
  age: 11
},
{
  name: "sadyr",
  lastname:"Japarov",
  age: 44
},
{
  name: "Elon",
  lastname: "mask",
  age: 51
}
]
let container = document.querySelector("#container")

people.forEach((item) => {
  let person = document.createElement("div");
  
})