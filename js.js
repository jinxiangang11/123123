class student{
    constructor(name,id){
         this.name=name,
         this.id=id
    }
    study(){
        console.log(`${this.name} is study`);
    }
    static test(){
        console.log("aaaaa");
    }
}
let stu=new student('小敏',100)
// console.log(stu);
stu.study()
student.test()
class anm{
    constructor(){
        console.log();
    }
}