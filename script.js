// mySecs.value == 0
// var startTimer = null;
const stopWatch = () =>{
    let countedSec = mySecs.value;
    countedSec++;
    mySecs.value = countedSec;
    myTimeout = setTimeout(stopWatch, 7.5);
    if(mySecs.value == 100){
        mySecs.value = 0;
        myMin.value++;
    }
    if(myMin.value == 60){
        myMin.value = 0;
        myHour.value++
    }
    // return
}
function stopButton(){
    clearTimeout(myTimeout);
}
const resetButton = ()=>{
    clearInterval(myTimeout);
    mySecs.value = "00";
    myMin.value = "00";
    myHour.value = "00";
}
