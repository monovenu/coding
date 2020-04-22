 var s = "leetcode";
 var s2= "abc";

console.log(unique(s));


function unique1(s){
  for(let i=0;i<s.length;i++){
    if(s.indexOf(s[i])!=s.lastIndexOf(s[i])){
      return false;
    }
  }
  return true;
}

function unique(s){
  let set=new Set(s);
  if(set.size==s.length) return true;
  return false;
}