function changeText(){
    var textsArray = ["One","Two","Three", "Four", "Five"];
    var number = getRandomNumberBetween(0,textsArray.length -1 );
    var texttochangeto=textsArray[number];
    console.log("Index:", number)
    document.getElementById('heading').innerHTML = textsArray[number];
}
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
