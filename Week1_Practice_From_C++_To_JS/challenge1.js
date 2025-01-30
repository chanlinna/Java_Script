function challenge1(width, height) { 
    let rectangleString = ''; 

    for (let i = 0; i < height; i++) { 
        for (let j = 0; j < width; j++) { 
            rectangleString += '*'; 
        }
        rectangleString += '\n';  
    }

    return rectangleString; 
}
console.log(challenge1(5, 2));
console.log(challenge1(3, 4));
console.log(challenge1(5, -2));

