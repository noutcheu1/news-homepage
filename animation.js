let menu_open = document.getElementsByClassName('.menu');
let menu_close = document.querySelector('.close');
let menu_vertical = document.querySelector('.menu_vertical');
let display_menu = document.querySelector('#display_menu');
let device_width =  window.screen.width
let sub_menu = null
if (device_width <=750) {
    let click = false
    console.log(menu_vertical);
    sub_menu = document.querySelector('.sub_menu');
    menu_vertical = document.querySelector('.menu_vertical');
    menu_open = document.querySelector('.menu');
    display_menu = document.querySelector('#display_menu');
    
    menu_open.addEventListener('click' , () =>{
        console.log('hello 1');
        // display_menu.style = "transform: translateX(-5%);";
        menu_vertical.style = "display: grid; transform: translateX(-5%);";
        
        // sub_menu.style = "transform: translateX(-5%);";
        
        
    }); 
    menu_close = document.querySelector('.close');
    menu_close.addEventListener('click' , () =>{
       
        // display_menu.style = "transform: translateX(-5%);";
        console.log('hello');
        menu_vertical.style = `
        display: none;
        transform: translateX(100%);
        `

        // sub_menu.style = "transform: translateX(100%);";
    }); 
    
}