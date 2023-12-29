// let firstName='Dhruv'
// let lastName:string='Verma'
// let count:number = 52
// let isLoading:boolean = true
// let number   // type any

// let age:null | string=null
// age = null



// const user:{name:string, age:number, id:number}={
//   name: 'dhruv',
//   age: 28,
//   id: 1
// }

// const users:{name:string, age:number, id?:number}={
//   name: 'dhruv',
//   age: 28,
// }

// const fruit:string[] = ['apple', 'banana']
// const num:number[] = [1,2,3,4,]
// const userrr= [{id: 1, name: ''}, {id: 2, name: ''}]
// const userss:{id:number, name:string}[]= [{id: 1, name: ''}, {id: 2, name: ''}]



// const sum = (a:number, b:number)=>{
//   return a+b
// }

// sum(5, 10)

// const handleApiResponse = (payload:{userId:number}, callback:(a:number, b:number)=> number) => {

// }

// handleApiResponse({userId: 1}, sum)


// interface User{
//   name:string
//   id:number
//   getUser:()=>void
// }

// let data:User={
//   name: "fruit",
//   id: 1,
//   getUser:() => {
    
//   }
// }

// let dataa:User[]=[{
//   name: "fruit",                    //For array type data
//   id: 1,
//   getUser:() => {
//   }
// }]

// //here we define interface and also extend interface here

// interface User extends Person{
//   name:string,
//   id:number,
//   getUser:()=>void
// }

// interface Person{
//   department:string
// }

// let userrrr:User[]=[{
//   name: "sejal",
//   id: 1,
//   getUser:()=>{},
//   department:"nameofDepartment"
// }]


// type employee = {
//   id:number,
//   name:string
// }

// type manager={
//   department:string
// } &employee

// let employeewithmanager:manager={
//   department: "A",
//   id:2,
//   name:"Dhruv"
// }