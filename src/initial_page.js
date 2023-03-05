

let myPage = (main_content_div) =>{

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

    main_content_div.appendChild(navbar);

    const content_container = document.createElement('div');
    content_container.classList.add('content-div');

    let heading = document.createElement('h1');
    heading.textContent = 'this is My Odin Restaurant';
    content_container.appendChild(heading);


    let image = document.createElement('img');
    image.setAttribute('src','../restaurant.jpg');
    image.setAttribute('width', '500px');
    content_container.appendChild(image);

    let content = document.createElement('p');
    content.textContent = "this is my odin restaurant's initial landing page";
    content_container.appendChild(content);

    main_content_div.appendChild(content_container);
}


export { myPage };