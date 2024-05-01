const fs = require('fs-extra');

function calculateExtraFood() {
    try {
     
        const animals = fs.readFileSync('animals.txt', 'utf-8').trim().split('\n').map(item => item.trim());
        const food = fs.readFileSync('food.txt', 'utf-8').trim().split('\n').map(item => item.trim());

        const difference = food.length - animals.length;
        
        const leftoverFood = difference > 0 ? food.slice(-difference) : [];

        return leftoverFood.join('-');
    } catch (err) {
        console.error('An error occurred:', err);
        return '';
    }
}

console.log('Leftover food:', calculateExtraFood());
