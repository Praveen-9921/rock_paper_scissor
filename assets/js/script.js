//computer option
let computer_images = document.querySelectorAll('#img')
let user_images = document.querySelectorAll('#img1')
let win = document.querySelector("#output");



//random genrate by computer
// Generate a random index between 0 and the number of images
const randomIndex = Math.floor(Math.random() * computer_images.length);
let  computer_choice = randomIndex;
const random = () => {
  setTimeout(() => {
    computer_images[randomIndex].style.display = 'flex';
  }, 3000);
}


random();

let userChoice;
user_images.forEach((image,index) => {
    image.addEventListener("click", (event) => {
      userChoice = index;
      user_images.forEach((img,imgIndex) => {
        if (imgIndex !== index) {
          img.style.display = "none";
        }
      });
      check_win();
    });
});


//function to win
const check_win = ()=>{
   if((computer_choice == 0 && userChoice == 1) ||
   (computer_choice == 1 && userChoice == 2) ||
   (computer_choice == 2 && userChoice == 0)){
    setTimeout(() => {
    win.innerText = "You're the ultimate champion of rock, paper, scissors! 🏆📄✂️ Congrats on your epic win!"
  }, 3500);
    
   }

   else if((computer_choice == 0 && userChoice == 0) ||
   (computer_choice == 1 && userChoice == 1) ||
   (computer_choice == 2 && userChoice == 2)){
    setTimeout(() => {
      win.innerText = "Tie game! You both rock! Keep playing for a chance to win next time! 🤝🎮😄"
    }, 3500);
   }
   
   else{
    setTimeout(() => {
      win.innerText = "Aw, don't worry! Sometimes you win, sometimes you learn. Keep playing and you'll conquer the game! 🎮👊😄"
    }, 3500);
   }
}







//waste
//paper scissor stone
// stone1.addEventListener('click',()=>{
//     paper1.style.display = "none"
//     scissor1.style.display = "none"
//     if(randomIndex[1]){
//         console.log("you win");
//     }
//     else if(randomIndex[2]){
//         console.log("DRAW");
//     }
// });

//user option
// let stone1 = document.getElementById('stone2')
// let paper1 = document.getElementById('paper2')
// let scissor1 = document.getElementById('scissor2')