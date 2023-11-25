//For loop --> dawtalt]
//()-> dotr dawtah nuhtsul
//for( var i=ehleh_too; i<=tugsgul_too; i++/i--){
    //end dawtah code
//}
for(var i=1;i<=10;i++){
    console.log(i+"hello");
}
for(var i=10; i>=1; i--){
    console.log(i+"hi");
}

for(var i=1;i<=20;i++){

    if(i%2==0 ){
        console.log(i+ "tegsh")
    }else{
        console.log(i+"sondgoi")
    }
}
var niilber=0
for(var i=1; i<11; i++){
    niilber=niilber+i;
    
}
//i=1 -> 1<11 true -> 0=0+1 ->1
//i=2 -> 2<11 true -> 1=1+2 ->3
console.log(niilber);
// 1-10 hurtelh urjveriig olj bn
var urjver=1
for(var i=1; i<11; i++){
    urjver=urjver*i;
}
console.log(urjver)

//4.10iin hurd hevleh code
var hurd=10
for(var i=1;i<11;i++){
    hurd=hurd*i
    console.log(i+"*" + 10 + "=" + (10*i));
}
var too=9
for(var i=1;i<11;i++){
    console.log(i+"*" + 9 + "=" +(9*i));
}

var input = document.getElementsByTagName('input')[0];
var result = document.querySelector(".result");
var fact = 1
//check
console.log(input);
console.log(result);
//func
function calc(){
    var number = input.value;
    for(var i=1;i<=number; i++){
        fact=fact*i;
    }
    result.innerText = "Result:"+fact;
    fact=1
}