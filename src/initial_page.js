

let myPage = (main_content_div) =>{


    const content_container = document.createElement('div');
    content_container.setAttribute('id','content-div');

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