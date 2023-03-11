let tablinks = document.getElementsByClassName("me")
let tab_contents = document.getElementsByClassName("tab_content")
let navlinks = document.getElementsByClassName('nav')
for(let navlink of navlinks){
    navlink.addEventListener('mouseover',function(){
        navlink.classList.add('active_link')
    })
    navlink.addEventListener('mouseout',function(){
        navlink.classList.remove('active_link')
    })
}
function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active_link")
    }
    for(let tabcontent of tab_contents){
        tabcontent.classList.remove("active_tab")
    }
    event.currentTarget.classList.add("active_link")
    document.getElementById(tabname).classList.add('active_tab')
}
for(let tablink1 of tablinks){
    tablink1.addEventListener('mouseover',function(){
        tablink1.classList.add('active_link')
    })
}