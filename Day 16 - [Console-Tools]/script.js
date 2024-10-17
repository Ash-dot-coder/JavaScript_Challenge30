const anime = [
  { name: "Dororo", type: "Action", season: 1, since: 2019 },
  { name: "Monster", type: "Thriller", season: 1, since: 2004 },
  { name: "Ninja Kamui", type: "Sci-fi Action", season: 1, since: 2024 },
  { name: "Uzumaki", type: "Horror", season: 1, since: 2024 },
  { name: "Tokyo Ghoul", type: "Horror", season: 2, since: 2014 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// 1. Regular
console.log('Hey! "..regular"');

// 2. Interpolated
console.log('Hey! "This side is %s ..Ash"', "😎");

// 3. Styled
console.log(
  "%c I am playing with console",
  "font-size:7.7vw; text-align: left; margin: 2rem; color: yellowgreen; background:tomato; text-shadow: 1.19vw 1vw 0.73vw #1d1d1d"
);

// 4. Warning!
console.warn("OHHHHH NO!!");
console.warn("You've unlocked more tricks!!");

// 5. Error:|
console.error(
  "%c SOOOO DAMN!, [it's a styling error, lol ..😂]",
  "font-size:2vw;color: #1d1d1d;background-color:tomato;border-radius:3vw;padding-left: 2vw;padding-right: 2.67vw; margin-left: 1.52vw;"
);
console.error(`Let's play with error!`);

console.error(
  "%c ..now, you are in Tricky - Charged Mode.",
  "font-size: 2.53vw; color: tomato;"
);

// 6) Info
console.info("Loid Forger's %s real name is 'Twilight!'", "😎");

// 6.1) Testing
const p = document.querySelector("p");

console.assert(
  p.classList.contains("Nope!"),
  "'Twilight' is a code name,\n ..his real name has not been revealed!"
);

// 7. clearing
console.clear();

// 8. Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();

// 9. Grouping together
anime.forEach((anime) => {
  console.groupCollapsed(`${anime.name}`);
  console.log(`Anime series: ${anime.name}`);
  console.log(`${anime.name} showing -> ${anime.type} <- vibe!`);

  console.log(
    `${anime.name} has ${anime.season} Season - Since: ${anime.since}`
  );
  console.log(`${anime.name} has more than ..${anime.season * 3} episodes`);
  console.groupEnd(`${anime.name}`);
});

console.clear();

// 10. counting
console.count("Attack on titan");
console.count("Attack on titan");
console.count("Monster");
console.count("Attack on titan");
console.count("Demon Slayer");
console.count("Demon Slayer");
console.count("Attack on titan");
console.count("Blue Lock");
console.count("Haikyuu");
console.count("Haikyuu");
console.count("Demon Slayer");
console.count("Haikyuu");
console.count("Blue Lock");
console.count("Haikyuu");
console.clear();

// 11. timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});
console.table(anime);