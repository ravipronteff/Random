function isEven(m){
 return m%2 ==0;
}
function display(n,cbb){
 console.log(cbb(n))
}
function sum(a,b,cb){
  let c = a+b;
  cb(c,isEven);
}
sum(3,5,display)
