const players = [
    { name: 'Shubman Gill', year: 1999 },
    { name: 'AB de Villiers', year: 1984 },
    { name: 'Sunil Chhetri', year: 1984 },
    { name: 'Virat Kohli', year: 1988 },
    { name: 'Rohit Sharma', year: 1987 },
    { name: 'Neymar Jr.', year: 1992 },
    { name: 'Cristiano Ronaldo', year: 1985 },
    { name: 'MS Dhoni', year: 1981 },
    { name: 'KL Rahul', year: 1992 }
];

const compliments = [
    { honor: 'The future of Indian cricket!', id: 77 },
    { honor: 'A master of the game and batting genius!', id: 17 },
    { honor: 'A true legend of Indian football!', id: 11 },
    { honor: 'A Legend in the making, his passion for the game is unmatched!', id: 18 },
    { honor: 'The master of the chase, his batting is a treat to watch!', id: 45 },
    { honor: 'An absolute magician with the ball!', id: 10 },
    { honor: 'The Greatest Player of All Time!', id: '7' },
    { honor: 'Thala for a reason!, [The Man, The Myth, The Mahi]', id: 7 },
    { honor: 'A true champion!', id: 1 }
];


// steps: 

// 1 - Some()
// const isAdult = players.some(player => ((new Date()).getFullYear()) - player.year >= 18);
// console.table({ isAdult });

// 2 - every()
// const allAdults = players.every(player => ((new Date()).getFullYear()) - player.year >= 18);
// console.table({ allAdults });

// 3 - find()
// const compliment = compliments.find(compliment => compliment.id === 77);
// console.table({ compliment });

// 4 - findIndex()
// const index = compliments.findIndex(compliment => compliment.id === 77);
// console.table({ index });

// 5 - slice()
// const newCompliments = [
//     ...compliments.slice(0, index),
//     ...compliments.slice(index + 5)
// ];
// console.table(newCompliments)

// Showing the whole details
console.table({ ...players });
console.table({ ...compliments });