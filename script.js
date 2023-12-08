
const newYear = document.querySelector(".heading h1");

const currentYear = new Date().getFullYear();
console.log(currentYear);

newYear.innerHTML = `${currentYear+1}`;

const dayBox = document.querySelector("#day-box");
const hrBox = document.querySelector("#hr-box");
const minBox = document.querySelector("#min-box");
const secBox = document.querySelector("#sec-box");

let endDate = new Date(currentYear+1,0,1,0,0,0);
let endTime = endDate.getTime();
console.log(endDate);

function addZero( value ) {
    if( value <10 ){
        return "0"+value;
    }
    return value
}

function countdown(){
    const today = new Date();
    const todayTime = today.getTime();

    const remainingTime = endTime - todayTime;
    
    const oneMin = 60 * 1000;
    const oneHr = 60 * oneMin;
    const oneDay = 24 * oneHr;

    if( endTime  < todayTime){
        document.querySelector(".countdown").innerHTML = `<h1>Countdown Has Expired</h1>`;
        clearInterval(start);
    }
    else{
        const daysLeft = Math.floor( remainingTime / oneDay );
        const hrsLeft = Math.floor( (remainingTime % oneDay) / oneHr);
        const minsLeft = Math.floor( (remainingTime % oneHr) / oneMin );
        const secsLeft = Math.floor( (remainingTime % oneMin) / 1000);

        console.log(daysLeft, hrsLeft, minsLeft, secsLeft);

        dayBox.innerText = addZero(daysLeft);
        hrBox.innerText = addZero(hrsLeft);
        minBox.innerText = addZero(minsLeft);
        secBox.innerHTML = addZero(secsLeft);
    }

}


const start = setInterval( () => {
    countdown();
},1000);