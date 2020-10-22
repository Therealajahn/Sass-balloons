generateGridAreas("test");

function generateGridAreas(el){
    let grid = document.getElementsByClassName(el)[0];
    let coordinates = '';
    
    let c = 0;
    while(c < 100){
        if(c % 10 === 0){
               coordinates += '"';
        }
         coordinates += `${x}`;
        if(c % 10 === 9){
            coordinates += '"\n';
        }
        
        
        c++;
    }
    console.log(coordinates);
    grid.style.gridTemplateAreas = `${coordinates}`;
}



