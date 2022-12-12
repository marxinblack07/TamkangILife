//---------------------------------------------------------
// Const variables.
const navbar = document.querySelector('#navbar');
//---------------------------------------------------------
//Scroll Detection.
window.addEventListener('scroll',function(){
    if (this.window.scrollX> 80) {
        navbar.classList.add('navFix');
    }
    else {
        navbar.classList.remove('navFix');
    }
});