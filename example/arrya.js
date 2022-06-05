const perez  = [

    {
        id:1,
        name:"collins",
        age:16
    },
    {
        id:2,
        name:"mbathi",
        age:21
    },
    {
        id:3,
        name:"perez",
        age:18
    },
    {
        id:4,
        name:"mbuvi",
        age:22
    }


];

// for(let i=0; i<perez.length; i++) {
// console.log(perez[i]);
// } 

// let Adult = [];
// for (i=0; i<perez.length; i++) {
//     if(perez[i].age >= 18) {
//     Adult.push(perez[i]);
//     }
// }
// console.log(Adult);
const Adult = perez.filter((child)=>{
return child.age === 22;
})

console.log(Adult);