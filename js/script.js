let userWord="";
// add fuction at the button
document.querySelector('.palindrome .btn').addEventListener('click', function () {
  userWord= document.querySelector('input').value.toLocaleLowerCase();
  if(userWord==""){
    alert("devi inserire una parola");
  }  
  else{
    document.querySelector('.palindrome h2').classList.remove("invisible")
    if (palindrome(userWord)) {
      document.querySelector('.palindrome span').innerHTML=` &egrave; palindroma`
    } 
    else{
      document.querySelector('.palindrome span').innerHTML=` non &egrave; palindroma`
    }
  }
});
// added function that returns if a word is palindrome
function palindrome(tempWord)
{
  let words=[];
 // I subdivide the letters of the string
  words=tempWord.split('');
 // I reverse them
  words.reverse();
  words=words.join("");
  if (tempWord == words) {
    return true;
  }
  return false;
}

// part of even and odd

let userNumber=0;
let numberBot=0;
// added function to even button
document.getElementById('even').addEventListener('click', function(){
  userNumber=parseInt(document.querySelector('.even-odd input').value)
  if(isNaN(userNumber) || userNumber >5 || userNumber<1){
    document.querySelector(".even-odd h3").innerHTML=('Devi inserire un numero da 1 a 5!!')
  }
  else{
    numberBot=numberRandom();
    returnNumberbots();
    let sumNumbers=sum(userNumber, numberBot);
    if (isEven(sumNumbers)) {
      returnWin();
    }
    else{
      returnLose()
    }
  }
});
// added function to odd button
document.getElementById('odd').addEventListener('click', function(){
  userNumber=parseInt(document.querySelector('.even-odd input').value)
  if(isNaN(userNumber) || userNumber >5 || userNumber<1){
    document.querySelector(".even-odd h3").innerHTML=('Devi inserire un numero da 1 a 5!!')
  }
  else{
    numberBot=numberRandom();
    returnNumberbots();
    let sumNumbers=sum(userNumber, numberBot);
    if (isEven(sumNumbers)) {
      returnLose()
    }
    else{
      returnWin();
    }
  }
});
// Function of even or odd
// function that return a number from 1 to 5 a
function numberRandom(){
  let tempnumb=Math.floor((Math.random()*5)+1);
  return tempnumb;
}
// function that returns a sum
function sum(numb1, numb2){
  numb1+=numb2;
  return numb1;
}
// function that returns if it is even
function isEven(number){
  if(number % 2 === 0){
    return true;
  }
  return false;
}
// function that adds a win text to the html
function returnWin(){
  document.querySelector(".even-odd h3").innerHTML=('Hai vinto')
}
// function that adds a lose text to the html
function returnLose(){
  document.querySelector(".even-odd h3").innerHTML=('Hai Perso')
}
// function that adds a number bots to the html
function returnNumberbots(){
  document.querySelector(".even-odd span").innerHTML=(numberBot);
}
