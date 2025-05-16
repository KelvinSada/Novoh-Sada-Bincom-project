// Handling the navigation toggle
  const menuToggle = document.getElementById('menuToggle');
  const menuItems = document.getElementById('menuItems');

document.addEventListener('DOMContentLoaded', function() {
  menuToggle.addEventListener('click', function() {
      menuItems.classList.toggle('active');
      
      if (menuItems.classList.contains('active')) {
          menuToggle.textContent = 'Close';
      } else {
          menuToggle.textContent = 'Menu';
      }
  });
});

// Showing previous projects dynamically
const projectsSection = document.querySelector(".previous-work-content");

const projectsArray = [{
  link:"https://outbound.im/",
  src:"./picture/outbound-ai.png",
  text:"Outbouna AI - A Virtual Customer Care Assistant",
  alt:"Outbound AI",
},
{
  link:"https://new-nks-hng2-task-event-ticket.netlify.app/",
  src:"./picture/event-ticket-booking.png",
  text:"Event Ticket Booking System ",
  alt:"Event Ticket Booking System ",
},
{
  link:"https://kelvinsada.github.io/NKSstore/",
  src:"./picture/Shopping-website.png",
  text:"A responsive E-commerce website",
  alt:"Shopping website",
},
{
  link:"https://nks-ai-text-processor.netlify.app/",
  src:"./picture/AI-text-processor.png",
  text:"AI Text Processor (Translate texts to multiple language)",
  alt:"Dynamic Note",
}]

const addingPreviousProjects =() =>{
  projectsSection.innerHTML += projectsArray.map(x => (
    `<div class="project-card">
      <a href="${x.link}" target="_blank" class="project-link">
        <div class="image-container">
          <img src="${x.src}" alt="${x.alt}" class="project-image"/>
        </div>
        <div class="project-info">
          <h3 class="project-title">${x.text}</h3>
          <span class="view-project">View Project </span>
        </div>
      </a>
    </div>`))
}
addingPreviousProjects()

const imagesSection = document.querySelector(".related-pictures");
const images = ["./picture/convocation.jpg","./picture/Looking-good.jpg","./picture/sign-out.jpg","./picture/With-friend(1).jpg","./picture/with-siblings.jpg"];
var i = 0;

const imageSlides = ()=>{

    imagesSection.innerHTML = `<img src=${images[i]} class="image-slides"/>`
    if (i< images.length -1){
      i++;
    } else {
      i = 0;
    }

  setTimeout("imageSlides()",2500)
}
imageSlides()

document.querySelectorAll('.menu-items a').forEach(items => {
  items.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    console.log(targetId)
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    menuToggle.classList.remove("active");
    offScreenMenu.classList.remove("active")
  });
});



