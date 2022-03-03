let userWord="";
let words=[];
document.querySelector('.palindrome .btn').addEventListener('click', function () {
  userWord= document.querySelector('input').value;
  console.log(userWord);
  words=userWord.split('');
  console.log(words)

words.reverse();
let reverseWord="";
for (let i = 0; i < userWord.length; i++) {
  reverseWord+=words[i];
}
console.log(reverseWord);
palindrome(userWord , reverseWord);
})


function palindrome(tempWord , tempReversWord)
{
  if (tempWord == tempReversWord) {
    console.log('sono palindrome');
  }
  else 
  console.log('non sono palindrome');
}