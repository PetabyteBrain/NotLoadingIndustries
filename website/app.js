const titleBox = document.getElementById('titleBox');

titleBox.onmousemove = function(e) { 
    const rect = titleBox.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    document.documentElement.style.setProperty('--titleBoxX', `${xPercent}%`);
    document.documentElement.style.setProperty('--titleBoxY', `${yPercent}%`);

}
