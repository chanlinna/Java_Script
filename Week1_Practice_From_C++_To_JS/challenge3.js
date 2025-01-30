function challenge3(grades) {
    if (grades.length === 0) return 0;
    
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    
    return sum / grades.length;
}

console.log(challenge3([85, 90, 78, 92])); // Output: 86.25
console.log(challenge3([10, 20, 30]));     // Output: 20
console.log(challenge3([]));              // Output: 0
