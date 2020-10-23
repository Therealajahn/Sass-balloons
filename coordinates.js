generateGridAreas("test",10);
//use even numbers for length
function generateGridAreas(el,length){
    let grid = document.getElementsByClassName(el)[0];
    let coordinates = '';
    
    let c = 0;
    let y = length / 2;
    while(c < length * length){
        let x = c % 10 - (length / 2);
        if(c % length === 0){
               coordinates += '"';
        }
         coordinates += `x${x}y${y} `;
        if(c % length === 9){
            coordinates += '"\n';
            y--;
        }
        c++;
    }
    
    grid.style.gridTemplateAreas = `${coordinates}`;
    assigncoordinates('pixel',length);
}


function assigncoordinates(el,length){
    
    let pixels = document.getElementsByClassName(el);
    
    Array.from(pixels).forEach(pixel =>{
        pixel.style.gridArea = randomizeXY(length);
    })
} 

function randomizeXY(length){
    let randomX =  Math.floor(Math.random() * length) - (length / 2 - 1);
    let randomY =  Math.floor(Math.random() * length) - (length / 2 - 1);
    return `x${randomX}y${randomY}`;
}




