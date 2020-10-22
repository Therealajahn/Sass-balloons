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
    console.log(coordinates);
    grid.style.gridTemplateAreas = `${coordinates}`;
}



