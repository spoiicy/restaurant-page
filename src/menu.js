let menuPage = (main_content_div)=>{

    const menu_container = document.createElement('div');
    menu_container.setAttribute('id','content-div');

    const first_menu = document.createElement('div');
    first_menu.classList.add('menu-content');
    
    const first_menu_item_heading = document.createElement('h1');
    first_menu_item_heading.textContent = "Chole Bhature";
    first_menu.appendChild(first_menu_item_heading);
    
    const first_menu_item_image = document.createElement('img');
    first_menu_item_image.src = '../chole_bhature.jpg';
    first_menu_item_image.setAttribute('height','300px');
    first_menu.appendChild(first_menu_item_image);

    const first_menu_item_desc = document.createElement('p');
    first_menu_item_desc.textContent = "Chole bhature is a popular North Indian dish that consists of spicy chickpeas (chole) served with deep-fried bread (bhature). It's a delicious and filling meal that is enjoyed for breakfast, lunch, or dinner.";
    first_menu.appendChild(first_menu_item_desc);


    menu_container.appendChild(first_menu);

    const second_menu = document.createElement('div');
    second_menu.classList.add('menu-content');
    
    const second_menu_item_heading = document.createElement('h1');
    second_menu_item_heading.textContent = "Amritsari Kulcha";
    second_menu.appendChild(second_menu_item_heading);
    
    const second_menu_item_image = document.createElement('img');
    second_menu_item_image.src = '../amritsari_kulcha.jpg';
    second_menu_item_image.setAttribute('height','300px');
    second_menu.appendChild(second_menu_item_image);

    const second_menu_item_desc = document.createElement('p');
    second_menu_item_desc.textContent = "Amritsari kulcha is a traditional Punjabi dish that consists of a crispy and fluffy flatbread stuffed with spiced mashed potatoes and served with chana masala and pickles. It's a popular street food that is enjoyed throughout India and beyond.";
    second_menu.appendChild(second_menu_item_desc);



    menu_container.appendChild(second_menu);

    main_content_div.appendChild(menu_container);

}

export {menuPage} ;