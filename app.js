document.addEventListener("click", function() {
    console.log("you clicked on the page and we listened");
});

document.addEventListener("click", function() {
   const mainHeading = document.querySelector('h1');
   mainHeading.style.backgroundColor = 'red';
});
s