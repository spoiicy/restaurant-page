const aboutUs = (main_content_div)=>{

    const about_us_container = document.createElement('div');
    about_us_container.setAttribute('id','content-div');

    const maps = document.createElement('iframe');
    maps.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.5806172698817!2d74.86125611514171!3d31.672691681319435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196551397ac6e1%3A0xa5c03c0335fb6ae8!2sMonu%20Kulcha%20Hut!5e0!3m2!1sen!2sin!4v1678046621384!5m2!1sen!2sin";
    //maps.setAttribute()
    maps.setAttribute('height','400px');
    maps.setAttribute('width','700px');

    about_us_container.appendChild(maps);

    const number = document.createElement('h1');
    number.textContent = "Call Us  -  +92 7508397796";
    about_us_container.appendChild(number);


    main_content_div.appendChild(about_us_container);

}

export {aboutUs};

//<iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>