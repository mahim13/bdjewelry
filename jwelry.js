// script.js

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
  
      if (!validateField(nameInput) || !validateField(emailInput) || !validateField(messageInput)) {
        alert('Please fill out all fields before submitting the form.');
        return;
      }
  
      alert('Form submitted successfully!');
      contactForm.reset();
    });
  
    function validateField(field) {
      return field.value.trim() !== '';
    }
  });