const titleBox = document.getElementById('titleBox');
const mainServices = document.getElementById('mainServices');

const programming = document.getElementById('programming');
const robotics = document.getElementById('robotics');
const cadModeling = document.getElementById('cadModeling');

titleBox.onmousemove = function(e) { 
    const rect = titleBox.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    document.documentElement.style.setProperty('--titleBoxX', `${xPercent}%`);
    document.documentElement.style.setProperty('--titleBoxY', `${yPercent}%`);

}

programming.onmousemove = function(e) { 
    const rect = mainServices.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 20;
    const yPercent = (y / rect.height) * 20;
    /*
    programming.style.transform = `skew(${xPercent}deg, ${yPercent}deg)`;
    robotics.style.transform = `skew(${xPercent}deg, ${yPercent}deg)`;
    cadModeling.style.transform = `skew(${xPercent}deg, ${yPercent}deg)`;
    console.log("on");
    */
    console.log(xPercent);
}
robotics.onmousemove = function(e) { 
    const rect = mainServices.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    /*
    programming.style.transform = `skew(${xPercent}deg, 0deg)`;
    robotics.style.transform = `skew(${xPercent}deg, 0deg)`;
    cadModeling.style.transform = `skew(${xPercent}deg, 0deg)`;
    console.log("on");
    */
    console.log(xPercent);
}
cadModeling.onmousemove = function(e) { 
    const rect = mainServices.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    /*
    programming.style.transform = `skew(${xPercent}deg, 0deg)`;
    robotics.style.transform = `skew(${xPercent}deg, 0deg)`;
    cadModeling.style.transform = `skew(${xPercent}deg, 0deg)`;
    console.log("on");
    */
    console.log(xPercent);
}