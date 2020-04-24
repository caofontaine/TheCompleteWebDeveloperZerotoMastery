const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    console.time('funchallenge');
    if(err) {
        console.log('Error processing file');
    }
    else {
        // Part 1
        let upFloors = data.toString('utf8').split('').filter(char => char === '(').length;
        let downFloors = data.toString('utf8').split('').filter(char => char === ')').length;
        console.log(upFloors);
        console.log(downFloors);
        console.log('Santa is on floor ', (upFloors - downFloors));

        // Part 2
        let chars = data.toString('utf8').split('');
        let negPosition = 0;
        let santasFloor = 0;
        chars.forEach((ch, i) => {
            if (ch === '(') {
                santasFloor++;
            }
            else {
                santasFloor--;
            }
            if (santasFloor === -1) {
                negPosition = i+1;
                console.log(negPosition);
            }
        });

        console.log(`Santa first hits the basement at position ${negPosition}`);
    }
    console.timeEnd('funchallenge');
});
