const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  if (!burger.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove('nav-active');
  }
});

// Handle form submission
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = encodeURIComponent(event.target.name.value);
  const email = encodeURIComponent(event.target.email.value);
  const phone = encodeURIComponent(event.target.phone.value);
  const subject = encodeURIComponent(event.target.subject.value);
  const message = encodeURIComponent(event.target.message.value);
  const contactMethod = event.target.contactMethod.value;

  // Get selected main service and sub-service
  const mainService = encodeURIComponent(event.target['main-service'].value);
  const subService = encodeURIComponent(event.target['sub-service'].value);

  const fullMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMain Service: ${mainService}%0ASpecific Service: ${subService}%0AMessage: ${message}`;

  if (contactMethod === 'email') {
    const mailtoLink = `mailto:iveha.electrical@gmail.com?subject=${subject}&body=${fullMessage}`;
    window.location.href = mailtoLink;
  } else if (contactMethod === 'whatsapp') {
    const whatsappLink = `https://wa.me/67578298973?text=${fullMessage}`;
    window.open(whatsappLink);
  }
});



// Form selections
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

function updateSubServices() {
  const mainServiceSelect = document.getElementById("main-service");
  const subServiceSelect = document.getElementById("sub-service");
  const selectedMainService = mainServiceSelect.value;

  // Clear previous options
  subServiceSelect.innerHTML = '<option value="" disabled selected>Select a Specific Service</option>';

  if (selectedMainService && subServiceOptions[selectedMainService]) {
    subServiceOptions[selectedMainService].forEach(service => {
      const option = document.createElement("option");
      option.value = service;
      option.textContent = service;
      subServiceSelect.appendChild(option);
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const mainServiceSelect = document.getElementById("main-service");
  if (mainServiceSelect) {
    mainServiceSelect.addEventListener("change", updateSubServices);
  }
});


// Smooth scroll to contact form
document.getElementById('hero-btn').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default anchor behavior
  const target = document.getElementById('contact-form'); // Get the target element
  target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
});