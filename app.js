// JS: Burger menu toggle functionality
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });

  // Close the menu when clicking outside of it
  document.addEventListener('click', (event) => {
    if (!burger.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove('nav-active');
    }
  });
}

// Handle form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = encodeURIComponent(event.target.name.value);
    const email = encodeURIComponent(event.target.email.value);
    const phone = encodeURIComponent(event.target.phone.value);
    const subject = encodeURIComponent(event.target.subject.value);
    const message = encodeURIComponent(event.target.message.value);
    const contactMethod = event.target['contact-method'].value;  // Correcting the reference

    // Get selected main service and sub-service
    const mainService = encodeURIComponent(event.target['main-service'].value);
    const subService = encodeURIComponent(event.target['sub-service'].value);

    const fullMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMain Service: ${mainService}%0ASpecific Service: ${subService}%0AMessage: ${message}`;

    // Check the selected contact method and construct the respective link
    if (contactMethod === 'email') {
      const mailtoLink = `mailto:iveha.electrical@gmail.com?subject=${subject}&body=${fullMessage}`;
      window.location.href = mailtoLink;
    } else if (contactMethod === 'whatsapp') {
      const whatsappLink = `https://wa.me/67578298973?text=${fullMessage}`;
      window.open(whatsappLink, '_blank');  // Use '_blank' to open in a new tab/window
    }
  });
}


// Form selections for dynamic sub-service options
const subServiceOptions = {
  "Electrical Services": [
    "Electrical Design & Installation",
    "Comprehensive Electrical Design",
    "Professional Electrical Installations",
    "Full Building Electrical Fit-Outs",
    "Electrical Maintenance & Repairs",
    "Bespoke Internal Lighting",
    "Data Cabling Installations",
    "Audio Visual Installations",
    "Heating, Ventilation, and Air Conditioning (HVAC)"
  ],
  "Safety Compliance": [
    "Electrical Installation Condition Reports (ECIR)",
    "Portable Appliance Testing (PAT)",
    "General and Periodic Electrical Inspections",
    "Building Regulations Compliance",
    "Fire Alarm Systems",
    "Emergency Lighting"
  ],
  "Renewable Energy": [
    "Solar Power Installations",
    "Low Energy Lighting (LED)",
    "Power Saving and Monitoring Hardware",
    "Energy Storage Solutions (ESS)",
    "Mini Hydro Power",
    "Mini Wind Power"
  ],
  "Maintenance": [
    "Condition Monitoring / Predictive Maintenance",
    "Defect Elimination & Root Cause Analysis",
    "Upgrade Projects"
  ]
};

// Update the specific service options based on selected main service
function updateSubServices() {
  const mainServiceSelect = document.getElementById("main-service");
  const subServiceSelect = document.getElementById("sub-service");
  const selectedMainService = mainServiceSelect.value;

  // Clear previous options
  subServiceSelect.innerHTML = '<option value="" disabled selected>Select a Specific Service</option>';

  // Add new options based on selected main service
  if (selectedMainService && subServiceOptions[selectedMainService]) {
    subServiceOptions[selectedMainService].forEach(service => {
      const option = document.createElement("option");
      option.value = service;
      option.textContent = service;
      subServiceSelect.appendChild(option);
    });
  }
}

// Set up event listener for when the main service changes
document.addEventListener("DOMContentLoaded", function() {
  const mainServiceSelect = document.getElementById("main-service");
  if (mainServiceSelect) {
    mainServiceSelect.addEventListener("change", updateSubServices);
  }
});



// Smooth scroll for hero buttons for home, service and project pages
const heroBtns = document.querySelectorAll('.hero-btn');

heroBtns.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    
    const targetId = button.getAttribute('href').slice(1); // Get the target id (remove the '#' from href)
    const targetElement = document.getElementById(targetId); // Get the target element
    
    if (targetElement) {
      // Scroll the target element into view smoothly
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Align the target to the top of the viewport
      });
    }
  });
});

