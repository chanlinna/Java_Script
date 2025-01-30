function challeng6(votes){
    
    if(votes.length===0){
        return "There is not vote yet";
    }

    let count = { A: 0, B: 0, C: 0 };

    votes.forEach(vote => count[vote]++);

    let maxCount = Math.max(count.A, count.B, count.C);
    let winner = [];

    if (count.A === maxCount) winner.push('A');
    if (count.B === maxCount) winner.push('B');
    if (count.C === maxCount) winner.push('C');

    if (winner.length === 3) {
        return `${winner.join(', ')} are all winners`;
    } 
    else if (winner.length === 1) {
        return `${winner[0]} is the winner`;
    } else {
        return `${winner.join(' and ')} are both winners`;
    }

}

console.log(challeng6(['A', 'B', 'A', 'C', 'A']));  // A is the winner
console.log(challeng6(['A', 'B', 'B', 'C', 'A']));  // A and B are both winners
console.log(challeng6([]));  // There is not vote yet