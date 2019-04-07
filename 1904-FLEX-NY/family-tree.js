
//import { isModuleSpecifier } from "@babel/types";

class FamilyTree{
  constructor(name){
      if (typeof name === 'string' && name){
          this.value = name;
      } else {
          throw 'Enter a Name';
      }
      this.children = [];
      this.parent;
  }
  insert(name){
      if (typeof name === 'string' && name){
          let child = new FamilyTree(name);
          child.parent = this;
          this.children.push(child);
      }
  }
  familySize(){
      return this.children.length + 1;
  }

  findMember(name){
      let tmp;
      for (let i = 0; i < this.children.length; i++){
          if (this.children[i].value === name){
              tmp = this.children[i];
          } else if (this.children[i].children.length){
             tmp = this.children[i].findMember(name);
          }
      }
      return tmp;
  }

 getGenerationNumber(num){
   if (this.parent){
     return this.parent.getGenerationNumber(num + 1);
   }
   return num;
 }

 log(){
      let logStr ='';
      let gen = '--';
      for (let i = 0; i < this.getGenerationNumber(0); i++){
        gen += '--';
      }
      logStr += gen + ' ' + this.value + '\n';
      for (let i = 0; i < this.children.length; i++){
          logStr += this.children[i].log();
      }
      console.log(logStr);
      return logStr;
  }
}

module.exports = FamilyTree;

/*
-- Pop
---- Mike
------ Eliot
------ Elise
------ Cas
------ George
------ Lear
---- Amy
------ Henry
------ Vivian
---- Todd`
*/