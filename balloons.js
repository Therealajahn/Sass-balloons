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

function putPixel(x, y){
    let grid = document.getElementsByClassName('test')[0];
    let i = 0;
    while(i < 8){
        let pixel = document.createElement('div');
        pixel.style.background =  '#BE4154';
        pixel.style.gridArea = `x${x}y${y}`;
        pixel.style.textAlign = 'center';
        pixel.style.color = '#D9DEBA';
        pixel.style.fontSize = '23px';
        pixel.innerHTML = 'Y';
        grid.appendChild(pixel);
        i++;
    }
    
}

//implmented Brasenhams algorithm adapted from this C example: https://www.geeksforgeeks.org/bresenhams-circle-drawing-algorithm/

function drawCircle(xc,yc,x,y){
    putPixel(xc + x,yc + y);
    putPixel(xc - x,yc + y);
    putPixel(xc + x,yc - y);
    putPixel(xc - x,yc - y);
    putPixel(xc + y,yc + x);
    putPixel(xc - y,yc + x);
    putPixel(xc + y,yc - x);
    putPixel(xc - y,yc - x);
}

function circleBres(xc,yc, r) { 
    let x = 0, y = r; 
    let d = 3 - 2 * r; 
    
    drawCircle(xc, yc, x, y); 
    
    while (y >= x) { 
      x++; 
        if (d > 0){ 
            y--;  
            d = d + 4 * (x - y) + 10; 
        } 
        else
            d = d + 4 * x + 6; 
        drawCircle(xc, yc, x, y); 
    } 
} 

circleBres(0,0,5);

