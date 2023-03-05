import { myPage } from "./initial_page";
import './style.css';
import { menuPage } from "./menu";


let navbar = document.createElement('div');
navbar.classList.add('nav-bar');

let home_link = document.createElement('p');
home_link.textContent = "Home";
home_link.classList.add('home');
navbar.appendChild(home_link);

let menu_link = document.createElement('p');
menu_link.textContent = "Menu";
menu_link.classList.add('menu');
navbar.appendChild(menu_link);

let about_us_link = document.createElement('p');
about_us_link.textContent= "About Us";
about_us_link.classList.add('about-us');
navbar.appendChild(about_us_link);

let content_container = document.querySelector('#content');
content_container.appendChild(navbar);


home_link.addEventListener('click',()=>{
    document.querySelector('#content-div').remove();
    
    myPage(content_container);
})

menu_link.addEventListener('click',()=>{
    document.querySelector('#content-div').remove();
    menuPage(content_container);
})





myPage(content_container);



