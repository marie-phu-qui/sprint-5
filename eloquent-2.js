// LOOPING A TRIANGLE
var triangleBlock = "";
for (var i = 0; i<7;i++){
    console.log(triangleBlock += "#");
}

// FIZZBUZZ
var divisibleBy3 = "Fizz";
var divisibleBy5 = "Buzz";

for(var number = 1; number <= 100; number++){
    if(number%3==0 && number%5==0){
        console.log(divisibleBy3+divisibleBy5);
    }
    else if(number%3==0){
        console.log(divisibleBy3);
    }
    else if(number%5==0){
        console.log(divisibleBy5);
    }
    else{
        console.log(number);
    }
}

// CHESS BOARD
