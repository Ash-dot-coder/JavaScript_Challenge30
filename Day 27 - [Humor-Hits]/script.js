alert("JavaScript Challenge: Day-27");

const showTheJoke = document.getElementById("showTheJoke");
const button = document.getElementById("getJoke");

button.addEventListener("click", suffleTheJoke);

function suffleTheJoke() {
    const ajax = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/random";
    ajax.open("GET", url, true);

    ajax.onreadystatechange = () =>{
        if(ajax.status === 200 && ajax.readyState === 4){
            let memory = JSON.parse(ajax.responseText);
            showTheJoke.innerHTML = `${memory.value}`;
        }else{
            ajax.onerror = onerror();
        }
    };
    ajax.send();
}

function onerror() {
    showTheJoke.textContent = 'Ohh Damn! something is very wrong :(';
}