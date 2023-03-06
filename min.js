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


const form = document.querySelector('form');
const firstName = form.querySelector('#firstName');
const email = form.querySelector('#email');
const number = form.querySelector('#number');
const message = form.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // handle form validation
  if (firstName.value.trim() === '') {
    alert('Please enter your first name');
    return;
  }

  if (email.value.trim() === '') {
    alert('Please enter your email');
    return;
  }

  if (number.value.trim() === '') {
    alert('Please enter your phone number');
    return;
  }

  if (message.value.trim() === '') {
    alert('Please enter your message');
    return;
  }

  // prepare data to be sent to the server
  const data = {
    firstName: firstName.value.trim(),
    email: email.value.trim(),
    number: number.value.trim(),
    message: message.value.trim(),
  };

  // send form data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/sendmessage', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (this.status === 200) {
      alert('Message sent successfully');
      form.reset();
    } else {
      alert('Failed to send message');
    }
  };
  xhr.send(JSON.stringify(data));
});

