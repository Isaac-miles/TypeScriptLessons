//utility types

//partial
interface Assignment{
    studentId:string,
    title:string,
    grade:number,
    verified?:boolean
}
const updateAssignment =(assign:Assignment, propsToUpdate:Partial<Assignment>):Assignment=>{
    return {...assign, ...propsToUpdate}
}
const assign1: Assignment ={
    studentId: 'csc15',
    title:'Final year project',
    grade:1
}

console.log(updateAssignment(assign1, {grade:99}))
const assignGraded:Assignment = updateAssignment(assign1, {grade:99})

//Required and Readonly

const recordAssignment = (assign:Required<Assignment>):Assignment=>{
    //write your logic
    return assign
}

const assignVerified:Readonly<Assignment>={...assignGraded, verified:true}

// assignVerified.grade = 2 throws an error because you cant change a readonly property

recordAssignment({...assignGraded, verified:false})

//Record
const hexColorMap: Record<string, string>={
    red:'ff0000',
    green:'00ff00',
    blue:'0000ff'
}
interface hexColorMapA {
    [key:string]: string  //same as whats above
}
type colors = 'red' | 'green' | 'blue'
type hexColorMapB = Record <colors, string>
console.log(hexColorMap)

const hexVal:hexColorMapB ={
    blue:'',
    red:'',
    green:''
}

type Students = 'Press' | 'Joy'
type studentGrade = 'A' | 'B' | 'C' | 'D' | 'U'

const cscStudent: Record<Students, studentGrade> = {
 'Joy' : 'A',
 'Press': 'B'
}

interface physicsGrade {
    phy101:number,
    phy404:number
}
const physicsStudent1: Record<Students, physicsGrade> ={
    Joy:{phy101:92, phy404:80},
    Press:{phy404:75,phy101:89}
}

//pick and Omit

type AssignResult = Pick<Assignment, "studentId" |"grade">

const score:AssignResult ={
    studentId: 'csc026',
    grade:97
}

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>
const preview: AssignPreview={
    studentId:'csc026',
    title:'final year project',   
}

// Exclude and Extract : these dont work with interface as with Omit and Pick, but with string literals

type adjustedGrade = Exclude <studentGrade, 'U'>
type highGraded = Extract<studentGrade, 'A'| 'B'>

//Nonnullable
type AllPossibleGrades = 'miles' | 'jon' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

//ReturnType
// type newAssign = {title:string, points:number}
const createNewAssign = (title:string, points:number)=>{
    return {title, points}
}
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign:NewAssign = createNewAssign('utilityTypes', 100)
console.log(tsAssign)

//Parameters this mostly gives a tuple
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Genre", 70]

const tsAssign2:NewAssign = createNewAssign(...assignArgs)

//Awaited - helps us with the ReturnType of a Promise
interface User {
    id:number,
    name:string,
    username:string,
    email:string
}
const fetchUsers = async(): Promise<User[]> =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
        return res.json()
    }).catch(err => {
        if(err instanceof Error) console.log(err.message)
    })
    return data
}
// type fetchUserReturnType = ReturnType<typeof fetchUsers> we dont want the promise but the actual return type
type fetchUserReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users=>console.log(users))
