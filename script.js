const h2 = document.createElement("h2");
h2.textContent = "Thanks For Stopping By! :)";

document.querySelector("body").appendChild(h2);





const submitButton = document.querySelector('button[type="submit"]');
const answerTextarea = document.querySelector('#Answer');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // prevent the form from submitting and refreshing the page
  
  const message = document.createElement('p'); // create a new <p> element to display the message
  message.textContent = 'I like that flavor too!'; // set the text content of the <p> element to the message
  document.getElementById('contact').appendChild(message); // add the <p> element to the <section> element with the id "contact"
});



