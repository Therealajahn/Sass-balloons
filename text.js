//use fetch request to get file
fetch('balloons.scss')
    .then(response => response.text())
    .then(text => {
     processText(text);
    })

function processText(text){    
        let space = /[ \n\r]/g;
        let property = /(?<=})/g;
        let balloonify = text
            .replace(space,'')
            .split(property);
        console.log('balloonify', balloonify);   
        return processText; 
}



    