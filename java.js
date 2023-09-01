let testname = document.querySelector('.burger');
let testname_ = document.querySelector('.menu-header--');
let testname__ = document.querySelector('.cross-menu');
let mobile = document.querySelector('.burger-mob');
mobile.addEventListener('click',funcname);
testname__.addEventListener('click', funcname);
testname.addEventListener('click', funcname);
function funcname (){
    testname_.classList.toggle('active');
}