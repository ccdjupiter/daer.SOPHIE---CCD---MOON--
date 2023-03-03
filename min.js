const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

// Define the menu icon click event
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
