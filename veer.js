let arr = ["samantha","rutvij","veer","shlok","misci"];
console.log(arr[4][3]);
let virsc = "               This is my most favourite book            ";
console.log(virsc.trim());
let num1 = 89;
let num2 = 76;
let allnum = num1+num2;
console.log("addn of num1 and num2",allnum);
let minusNum = num1 - num2;
console.log("subtract of num1 and num2",minusNum);
let percentNum = num1 % num2;
console.log("The remainder is num1 / num2",percentNum);
let divideNum = num1 / num2;
console.log("num1 divided by num2",divideNum);
let powerNum = num1**num2;
console.log("THe pwer of num1  is",powerNum);

let number = Math.floor(Math.random()*100)+1;
function all() {


if(number>50){
    if(number>75){
        if(number>88){
            console.log("The number is greater than 88");
        }
        else if(number==88){
            console.log("number is 88");
        }
        else{
            console.log("number is less than 88 and greater than 75");
        }
    }
    else{
        if(number==75 || number<75 || number >50){
            if(number>65){
                console.log("number is grater than 65 and less than 75");
            }
            else if(number == 65){
                console.log("number is equal to 65");
            }
            else{
                console.log("number is less than 65");
            }
        }
        else{
            console.log(number);
        }
    }

}
else{
    if(number>25){
        if(number>38){
            console.log("The number is greater than 38");
        }
        else if(number==38){
            console.log("number is 38");
        }
        else{
            console.log("number is less than 38 and greater than 25");
        }
    }
    else{
        if(number==25 || number<25 || number >=1){
            if(number>15){
                console.log("number is grater than 15 and less than 25");
            }
            else if(number == 15){
                console.log("number is equal to 15");
            }
            else{
                console.log("number is less than 15");
            }
        }
        else{
            console.log(number);
        }
    }
}
}
all();
console.log(number);

let h1 = document.querySelector("h1");
h1.innerHTML  = number;

