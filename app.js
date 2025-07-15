document.addEventListener("click", function() {
    console.log("you clicked on the page and we listened");
});

document.addEventListener("click", function() {
   const mainHeading = document.querySelector('h1');
   mainHeading.style.backgroundColor = 'red';
});

document.addEventListener("dblclick", function(){
    console.log("double clicked");
});
document.addEventListener("mouseove", function(){
    console.log("mouse ove");
});
document.addEventListener("mouseenter", function(){
    console.log("mouse enterd");
});

document.addEventListener("mousemove", function(){
    console.log("mouse moved");
});
document.addEventListener("mousedown", function(){
    console.log("mouse moved down");
});

document.addEventListener("mouseup", function(){
    console.log("mouse moved up");
});

document.addEventListener("dblclick", function(){
    console.log("double clicked");
});

document.addEventListener("keydown", function(){
    console.log("key down");
});

document.addEventListener("keypress", function(){
    console.log("key pressed");
});
document.addEventListener("keyup", function(){
    console.log("key up");
});