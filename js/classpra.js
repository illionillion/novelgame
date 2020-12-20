class Fooclass {
  // ...クラスの内容をここで定義する
}

const forclass=class{
  constructor(x,y){
    this.x=x
    this.y=y
  }
  get calc(){
    return this.x + this.y
  }
}

var a=new forclass(30,40);
var b=a.calc;

console.log(b);

var hooclass = class {
  constructor(z,a) {
  this.z = z
  this.a=a
}
get getZ() {
  /* get構文 */
  return this.z * this.a
}
}
var hoo = new hooclass(20,90);
var val = hoo.getZ;
console.log(val) ;/* 20が出力される */