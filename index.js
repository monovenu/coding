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
  console.log(this)
  console.log(this.a + this.b,c,d);
}

// bind(test,obj)();

let o={
  tessssst:function(){
    console.log(this);
  }
}
// o.tessssst();

Function.prototype.call2=function(o,...args){
  o=o||window;
  o.fn=this; //给o添加属性test
  const result=o.fn(...args);
  delete o.fn;
  return result;
}

test.call2(null,2,3);
// console.log(result);

//函数默认参数允许在没有值或undefined