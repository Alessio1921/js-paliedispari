let userWord="";
let words=[];
// add fuction at the button
document.querySelector('.palindrome .btn').addEventListener('click', function () {
  userWord= document.querySelector('input').value.toLocaleLowerCase();
  // I subdivide the letters of the string
  words=userWord.split('');
  // I reverse them
  words.reverse();
  let reverseWord="";
  // I create a loop to join the array and make it become a string
  for (let i = 0; i < userWord.length; i++) {
    reverseWord+=words[i];
  }
  document.querySelector('.palindrome h2').classList.remove("invisible")
  if (palindrome(userWord , reverseWord)) {
    document.querySelector('.palindrome span').innerHTML=` &egrave; palindroma`
  } 
  else{
    document.querySelector('.palindrome span').innerHTML=` non &egrave; palindroma`
  }
});

function palindrome(tempWord , tempReversWord)
{
  if (tempWord == tempReversWord) {
    return true;
  }
  return false;
}

// part of even and odd
let userNumber=0;
let numberBot=0;
console.log(numberBot);
document.getElementById('even').addEventListener('click', function(){
  userNumber=parseInt(document.querySelector('.even-odd input').value)
  numberBot=numberRandom();
  document.querySelector(".even-odd span").innerHTML=(numberBot);
  let sumNumbers=sum(userNumber, numberBot);
  if (isEven(sumNumbers)) {
    console.log('hai vinto');
    document.querySelector(".even-odd h3").innerHTML=('Hai vinto')
  }
  else{
    console.log("hai perso");
    document.querySelector(".even-odd h3").innerHTML=('Hai perso')
  }
  console.log(sumNumbers);


});
document.getElementById('odd').addEventListener('click', function(){
  userNumber=parseInt(document.querySelector('.even-odd input').value)
  numberBot=numberRandom();
  document.querySelector(".even-odd span").innerHTML=(numberBot);
  let sumNumbers=sum(userNumber, numberBot);
  if (isEven(sumNumbers)) {
    console.log("hai perso");
    document.querySelector(".even-odd h3").innerHTML=('Hai perso')
  }
  else{
    console.log('hai vinto');
    document.querySelector(".even-odd h3").innerHTML=('Hai vinto')
  }
  console.log(sumNumbers);
});

// function that generates a number from 1 to 5
function numberRandom(){
  let tempnumb=Math.floor((Math.random()*5)+1);
  return tempnumb;
}
function sum(numb1, numb2){
  numb1+=numb2;
  return numb1;
}
function isEven(number){
  if(number % 2 === 0){
    return true;
  }
  return false;
}