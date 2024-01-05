var lastScrollTop = 0;
navbar = document.getElementById("theHeader");
window.addEventListener("scroll", function(){
    var scrollTop = window.scrollY || this.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top = "-160px";
    }
    else{
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop
})
function openPopup(id){
    var popup = document.getElementById(id);
    var opa = document.getElementById("opa");

    console.log(opa);
    popup.style.display = "block";
    opa.style.display = "block";
}
function closePopup(id){
    var popup = document.getElementById(id);
    var opa = document.getElementById("opa");

    console.log(opa);
    popup.style.display = "none";
    opa.style.display = "none";
}
