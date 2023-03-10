const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

// Define the menu icon click event//
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
  });

  const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    accordionItem.classList.toggle('active');
  });
});


const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("status-message");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!isValidEmail(email)) {
    statusMessage.innerHTML = "Please enter a valid email address.";
    return;
  }

  sendEmail(name, email, message);
}

function isValidEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function sendEmail(name, email, message) {
  // Replace with code that sends the email
  // For example, using an API or a server-side script

  // This is just an example for demonstration purposes
  setTimeout(() => {
    statusMessage.innerHTML = "Message sent successfully!";
    form.reset();
  }, 2000);
}


  // This is for email funtion of sending mail to recipient
function sendEmail(){
  var params = {
    name:document.getElementById("name").value ,
    email:document.getElementById("email").value ,
    subject:document.getElementById("subject").value ,
    budget:document.getElementById("budget").value ,
  };
}

const serviceID = "service_9tj7u3b";
const templateID = "template_4ituisl";


emailjs.send(serviceID, templateID, params)

