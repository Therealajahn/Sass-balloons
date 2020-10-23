fetchSassFile();

function fetchSassFile(){
    fetch('CSS/balloons.scss')
        .then(response => response.text())
        .then(text => {
        processText(text);
        })
};



function processText(text){    
        let space = /[ \n\r]/g;
        let property = /(?<=})/g;
        let balloonify = text
            .replace(space,'')
            .split(property);
        console.log('balloonify', balloonify);   
        return processText; 
}

//use even numbers for length

generateGridAreas("test",20);

function generateGridAreas(el,length){
    let grid = document.getElementsByClassName(el)[0];
    let coordinates = '';
    
    let c = 0;
    let y = length / 2;
    
    while(c < length * length){
        let x = c % length - (length / 2);
        if(c % length === 0){
               coordinates += '"';
        }
         coordinates += `x${x}y${y} `;
        if(c % length === length - 1){
            coordinates += '"\n';
            y--;
        }
        c++;
    }
    
    grid.style.gridTemplateAreas = `${coordinates}`;

    // console.log('coordinates',coordinates);
}

function putPixel(x, y, canvas){
    let grid = document.getElementsByClassName(canvas)[0];
    let i = 0;
    while(i < 8){
        let pixel = document.createElement('div');
        pixel.style.background =  '#BE4154';
        pixel.style.gridArea = `x${x}y${y}`;
        grid.appendChild(pixel);
        i++;
    }
    
}

putPixel(0, 6,'test');

    