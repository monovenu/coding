//实现bind call apply
function bind(fn, o, ...args) {
  return function() {
    fn.apply(o, args);
  };
}

var obj = {
  a: 1,
  b: 3
};

function test(c,d) {
  console.log(1,this)
  console.log(this.a + this.b,c,d);
}

// bind(test,obj)();

let o={
  tessssst:function(){
    console.log(this);
  }
}
// o.tessssst();


//函数默认参数允许在没有值或undefined

Function.prototype.call2=function(o,...args){
  o=o||window;
  o.fn=this;// this是test
  let result=o.fn(...args);
  delete o.fn;
  return result;
}
Function.prototype.apply2=function(o,array=[]){
  o=o||window;
  o.fn=this;
  let result=o.fn(...array);
  delete o.fn;
  return result;
}
Function.prototype.bind=function(o,...args){
  o=o||window;
  let con=this;
  return function(){
    o.fn=con;
    let result=o.fn(...args);
    delete o.fn;
    return result;
  }
}

let oo={
  a:10,
  b:20
}
test.call2(oo,1,23333);
test.apply2(oo);
test.bind(oo,1,6)();

