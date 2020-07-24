function showFunction() {
    document.getElementById("dropDown").classList.toggle("show");

  }
  window.onload = function(){

    const menuBtn = document.querySelector('.ham');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


    document.querySelector('section').addEventListener('click', 
 function(e){
   console.log("container clicked");

    document.getElementById("dropDown").classList.remove('show');
    document.querySelector('.ham').classList.remove('open')
    }
)};