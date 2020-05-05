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
//数组降维
let res=flattenDeep([1, [[2], [3, [4]], 5]]);
console.log(res)
function flattenDeep(arr){
  if(!Array.isArray(arr)){
    return [arr];
  }
  let res=[];
  arr.forEach((ele)=>{
    if(Array.isArray(ele)){
      res=res.concat(flattenDeep(ele));
    }else {
      res.push(ele);
    }
  });
  return res;
}

let pushV=[1,2,3,4,5];
let popV=[4,5,3,2,1];

function isPoporder(pushV,popV){
  let stack=[];
  let j=0;
  for(let i=0;i<pushV.length;i++){
    stack.push(pushV[i]);
    while(j<popV.length && stack[stack.length-1]==popV[j]){
      stack.pop();
      j++;
    }
  }
  return stack.length==0;
}
let res=isPoporder(pushV,popV);
console.log(res);