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
  if (palindrome(userWord , reverseWord)) {
    document.querySelector('.palindrome h2').innerHTML=`La tua parola &egrave; palindroma`
  } 
  else{
    document.querySelector('.palindrome h2').innerHTML=`La tua parola non &egrave; palindroma`
  }
})


function palindrome(tempWord , tempReversWord)
{
  if (tempWord == tempReversWord) {
    return true;
  }
  return false;
}