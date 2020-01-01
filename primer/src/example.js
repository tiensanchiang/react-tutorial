console.log("hello")

const myFunc = function(){
    console.log("This statement is inside the function")
};

console.log("This statement is outside the function")
myFunc();

const myFunc2 = function(name,weather,...extras){
    console.log("Hello " + name +".");
    console.log("It is " + weather +" today.");
    for(let i=0;i<extras.length;i++){
	console.log("Extra Arg: " + extras[i]);
    }
}

myFunc2("Adam",  "Sunny", "One", "Two", "Three");
