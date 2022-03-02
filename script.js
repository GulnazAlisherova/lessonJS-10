// let fruits = ["apple", "banana", false, 13, "hello", ["1", "2", "3"], {name: "peter" , lastname: "parker"}, 12345]
// fruits.forEach((item=>{
//   console.log(typeof(item)); 
// }))
// // fruits.forEach(element => console.log(element));

// let people = [{
//   name:"Peter",
//   lastname:"Parker",
//   age: 34
// },
// {
//   name:"Lasley",
//   lastname: "Johnson",
//   age: 55
// },
// {
//   name: "Sam",
//   lastname: "Cruz",
//   age: 11
// },
// {
//   name: "Sadyr",
//   lastname:"Japarov",
//   age: 44
// },
// {
//   name: "Elon",
//   lastname: "Mask",
//   age: 51
// }
// ]
// let container = document.querySelector("#container")

// people.forEach((item) => {
//   let person = document.createElement("div");
//   let name = `${item. name} `;
//   let lastname =`${item.lastname}  `;
//   let age = `${item.age}`;
//   person.append( name);
//   person.append( lastname);
//   person.append( age);
//   container.append( person);
// })

let people =[
  {
    name: "Clara",
    resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos eligendi sapiente beatae, quasi totam omnis atque dignissimos numquam doloremque porro aspernatur enim fuga molestias facere, consequatur aperiam id possimus.",
    profession: "front-end",
  },
  {
    name: "Peter",
    resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos eligendi sapiente beatae, quasi totam omnis atque dignissimos numquam doloremque porro aspernatur enim fuga molestias facere, consequatur aperiam id possimus.",
    profession: "front-end",
  },
  {
    name: "Cillo",
    resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos eligendi sapiente beatae, quasi totam omnis atque dignissimos numquam doloremque porro aspernatur enim fuga molestias facere, consequatur aperiam id possimus.",
    profession: "front-end",
  },
  {
    name: "Dan",
    resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos eligendi sapiente beatae, quasi totam omnis atque dignissimos numquam doloremque porro aspernatur enim fuga molestias facere, consequatur aperiam id possimus.",
    profession: "front-end",
  },
  {
    name: "Mark",
    resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos eligendi sapiente beatae, quasi totam omnis atque dignissimos numquam doloremque porro aspernatur enim fuga molestias facere, consequatur aperiam id possimus.",
    profession: "front-end",
  },
];

document.querySelector("#div-name");
let divName = document.querySelector("#div-name");

people.forEach((item) => {
  let person = document.createElement("div");


  let name = `${item.name}`  ;

  document.createElement("h2");
  let h2Element = document.createElement("h2");
  divName.append(h2Element);

  let resume = `${item.resume}` ;

  let profession = item.profession;

  document.createElement("div");
  let divElement2 = document.createElement("div");

  divName.append(divElement2);
  person.append(name);
  person.append(resume);
  person.append(profession);

  
  divName.append(person);

  h2Element.append(name);
  // divElement2.append(profession);


});