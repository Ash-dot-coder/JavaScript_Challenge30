// Array Cardio : Part - 1

const inventors = [
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852, field: 'Mathematics & Computing', contribution: 'First Programmer' },
    { first: 'Alan', last: 'Turing', year: 1912, passed: 1954, field: 'Computer Science', contribution: 'Father of Computer Science' },
    { first: 'John', last: 'Von Neumann', year: 1903, passed: 1957, field: 'Mathematics & Computing', contribution: 'Game Theory & Architecture' },
    { first: 'Grace', last: 'Hopper', year: 1906, passed: 1992, field: 'Computer Science', contribution: 'COBOL & Debugging' },
    { first: 'Tim', last: 'Berners-Lee', year: 1955, passed: null, field: 'Web Development', contribution: 'Inventor of the World Wide Web' },
    { first: 'Dennis', last: 'Ritchie', year: 1941, passed: 2011, field: 'Computer Science', contribution: 'Creator of C Language' },
    { first: 'James', last: 'Gosling', year: 1955, passed: null, field: 'Computer Science', contribution: 'Creator of Java Language' },
    { first: 'Linus', last: 'Torvalds', year: 1969, passed: null, field: 'Operating Systems', contribution: 'Creator of Linux Kernel' },
    { first: 'Mark', last: 'Zuckerberg', year: 1984, passed: null, field: 'Social Media', contribution: 'Founder of Facebook' },
    { first: 'Bill', last: 'Gates', year: 1955, passed: null, field: 'Software Development', contribution: 'Co-Founder of Microsoft' },
    { first: 'Steve', last: 'Jobs', year: 1955, passed: 2011, field: 'Technology & Design', contribution: 'Co-Founder of Apple' },
    { first: 'Elon', last: 'Musk', year: 1971, passed: null, field: 'Technology & Innovation', contribution: 'Founder of SpaceX and Tesla' }
];

const people = [
    'Turing, Alan', 'Hopper, Grace', 'Lovelace, Ada', 'Gates, Bill', 'Jobs, Steve', 'Berners-Lee, Tim', 'Gosling, James', 'Ritchie, Dennis', 'Torvalds, Linus',
    'Zuckerberg, Mark', 'Musk, Elon', 'Wozniak, Steve', 'Page, Larry', 'Brin, Sergey', 'Bezos, Jeff', 'Cook, Tim', 'Dorsey, Jack', 'Pichai, Sundar',
    'Shannon, Claude', 'Knuth, Donald', 'Thompson, Ken', 'Cerf, Vint', 'Ellison, Larry', 'Kapoor, Ruchi', 'Anderson, Pamela', 'Li, Kai-Fu', 'Ames, Gordon',
    'Clarke, Arthur', 'Bell, Alexander', 'Mitchell, Margaret', 'Bernstein, Daniel', 'Levinson, Max'
];

// The steps :

// 1 - Filter() Inventors Born in the 1900s
const nineteenHundreds = inventors.filter(inventor => (inventor.year >= 1900 && inventor.year < 1960));
console.table(nineteenHundreds);

// 2 - Map() Inventors' Full Names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(fullNames);

// 3 - Sort() Inventors by Birthdate [Oldest to Youngest]
const ordered = inventors.sort((older, younger) => older.year > younger.year ? 1 : -1);
console.table(ordered);

// 4 - reduce() Calculate Total Years All Inventors Lived
const totalYears = inventors.reduce((total, inventor) => {
    return total + ((inventor.passed ? inventor.passed : new Date().getFullYear()) - inventor.year);
}, 0);
console.log(totalYears);

// Proper calculation
// const yearsLived = [];

// const totalYears = inventors.reduce((total, inventor) => {
//     const years = (inventor.passed ? inventor.passed : new Date().getFullYear()) - inventor.year;
//     yearsLived.push(years);
//     return total + years;
// }, 0);

// const calculation = yearsLived.join(' + ');
// console.log(`${calculation} = ${totalYears}`);

// 5 - Sort() Inventors by Years Lived
const oldest = inventors.sort((a, b) => {
    const lastInventor = (a.passed ? a.passed : new Date().getFullYear()) - a.year;
    const nextInventor = (b.passed ? b.passed : new Date().getFullYear()) - b.year;
    return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);

// 6 - Filter() Programming Languages Containing "Java"
const languages = ['JavaScript', 'Java', 'Python', 'C', 'C++', 'TypeScript', 'Go', 'Ruby', 'PHP', 'JavaFX'];
const javaLanguages = languages.filter(language => language.includes('Java'));
console.table(javaLanguages); 

// 7 - Sort() People Alphabetically by Last Name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);

// 8 - reduce() Count the Instances of Each Item in data
const data = ['laptop', 'laptop', 'desktop', 'Smart-phone',
    'desktop', 'tablet', 'phone', 'laptop', 'Smart-phone',
    'phone', 'tablet', 'laptop', 'desktop', 'laptop',
    'phone', 'VR headset', 'Smart-phone', 'Smart-phone', 'smart-watch'];

const techUsage = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.table(techUsage);