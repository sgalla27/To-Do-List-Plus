const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let coinCounter = 0;
const pText = document.getElementById("coinText");
const shopMenu = document.getElementById("shopMenu");
const shopPink = document.getElementById("shopPink");
const pinkText = document.getElementById("pinkText");
const pinkImg = document.getElementById("pinkImg");
const shopDog = document.getElementById("shopDog");
const dogText = document.getElementById("dogText");
const dogImg = document.getElementById("dogImg");
const bonsai = document.getElementById("bonsai");
const dog = document.getElementById("dog");
pText.innerHTML = coinCounter;
let pinkBought = false;
let dogBought = false;


function addTask(){
    if(inputBox.value === '')
    {
        alert("Can't Enter a Blank Task!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; //Where should it get its value from
        listContainer.appendChild(li); //Where to display it
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");

        if(e.target.classList.contains("checked")){
            console.log("Check");
        }
        else{
          
        }
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        if(e.target.parentElement.classList.contains("checked")){
             addCoin();
         }
        // else{
        //      if(coinCounter > 0){
        //     removeCoin();
        //      }
        // }
        e.target.parentElement.remove();
       
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function addCoin(){
    coinCounter++;
    pText.innerHTML = coinCounter;
}

function removeCoin(){
    coinCounter--;
    pText.innerHTML = coinCounter;
}

function buyPink(){
    if(coinCounter == 5)
    {
        coinCounter -= 5;
        pText.innerHTML = coinCounter;
        pinkBought = true;
        console.log("BOUGHT!")
        shopPink.style.display = 'none';
        pinkText.style.display = 'none';
        pinkImg.style.display = 'none';
        bonsai.style.display = 'block';
    }
    else
    {
        alert("Need more coins!");
    }
}

function buyDog(){
    if(coinCounter == 10)
    {
        coinCounter -= 10;
        pText.innerHTML = coinCounter;
        dogBought = true;
        console.log("BOUGHT!")
        shopDog.style.display = 'none';
        dogText.style.display = 'none';
        dogImg.style.display = 'none';
        dog.style.display = 'block';
    }
    else
    {
        alert("Need more coins!");
    }
}

function openShop(){
    if(shopMenu.style.display == 'none' || shopMenu.style.display == ''){
        shopMenu.style.display = 'block';
        if(pinkBought != true){
            shopPink.style.display = 'block';
            pinkText.style.display = 'block';
            pinkImg.style.display = 'block';
        }
        if(dogBought != true){
            shopDog.style.display = 'block';
            dogText.style.display = 'block';
            dogImg.style.display = 'block';
        }
        
    }
    else{
        shopMenu.style.display = 'none';
        shopPink.style.display = 'none';
        pinkText.style.display = 'none';
        pinkImg.style.display = 'none';
        shopDog.style.display = 'none';
        dogText.style.display = 'none';
        dogImg.style.display = 'none';

    }
}

showTask();