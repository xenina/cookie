let counter = "";
let counter1=0;
let newCounter1 ="";
btn1.onclick=function incrementCounter() {
    counter1 += 1;
    console.log(counter1);
    newCounter1=counter1+counter2+counter4;
    document.getElementById("counter").innerHTML = newCounter1;

    if (newCounter1==100){
        alert ("Любимчик бабули");
    } else if (newCounter1==500) {
        alert ("Следи за весом");   
    }else if(newCounter1==1000) {
        alert ("Работник года");
    } else if (newCounter1==10000) {
    alert ("Ваша фирма банкрот");
    }

};



let counter2=0;
let newCounter2="";
btn2.onclick=function incrementCounter() {
    counter2 += 2;
    console.log(counter2);
    newCounter2 =counter2+counter1+counter4;
    document.getElementById("counter").innerHTML = newCounter2;

    if (newCounter2==100){
        alert ("Любимчик бабули");
    } else if (newCounter2==500) {
        alert ("Следи за весом");   
    }else if(newCounter2==1000) {
        alert ("Работник года");
    } else if (newCounter2==10000) {
    alert ("Ваша фирма банкрот");
    }

};


let counter4=0;
let newCounter4="";
btn4.onclick=function incrementCounter() {
    counter4 += 4;
    console.log(counter4);
    newCounter4 =counter4+counter1+counter2;
    //console.log(counter);
    document.getElementById("counter").innerHTML = newCounter4;

    if (newCounter4==100) {
        alert ("Любимчик бабули");
    } else if (newCounter4==500) {
        alert ("Следи за весом");   
    }else if(newCounter4==1000) {
        alert ("Работник года");
    } else if (newCounter4==10000) {
    alert ("Ваша фирма банкрот");
    }
}
   
   
/*btn2.onclick=incrementCounter;
boost2.onclick=function {
    counter += 2;

}*/


