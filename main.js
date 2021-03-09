// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartFill={
  '♡': '♥',
  '♥': '♡'
};
const colors={
  'red': '',
  '': 'red'
};


const hearts = document.querySelectorAll('.like');

const handlerEvent = (e) => {
  heart = e.target;
  mimicServerCall('http://mimicServer.example.com')
  .then(()=>{
    heart.innerText=heartFill[heart.innerText];
    heart.style.color=colors[heart.style.color];
  })
  .catch(error=> console.log(error))
}


hearts.forEach(heart => heart.addEventListener('click', handlerEvent));

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
