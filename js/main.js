var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})

let emptyArea = document.getElementById("emptyarea");

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul li');

window.addEventListener('scroll', ()=>{
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - 200)){
      current = section.getAttribute('id');
    }
  })
navLi.forEach( li => {
  li.classList.remove('activeThistab');
  if(li.classList.contains(current)){
    li.classList.add('activeThistab')
  }
})
})

function scrollFunction(){
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
  {
    mybutton.style.display = "block";
  }
   else{
      mybutton.style.display = "none";
     
      }
}

function scrolltoTopfunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("contextmenu", function(e){
  if (e.target.nodeName === "IMG") {
      e.preventDefault();
  }
}, false);

document.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.project');

  function updateNeonEffect(project, mouseX, mouseY) {
    const rect = project.getBoundingClientRect();
    const closestX = Math.max(rect.left, Math.min(mouseX, rect.left + rect.width));
    const closestY = Math.max(rect.top, Math.min(mouseY, rect.top + rect.height));

    const dirX = mouseX - closestX;
    const dirY = mouseY - closestY;
    const distance = Math.sqrt(dirX * dirX + dirY * dirY);

    let intensity = Math.min(1, 10 / Math.max(distance, 1));
    intensity = Math.max(0.1, intensity); // Assure une intensité minimale pour que l'effet soit toujours perceptible

    project.style.boxShadow = `0 0 ${5 * intensity}px ${2 * intensity}px rgba(94, 46, 110, 0.3),
                               0 0 ${10 * intensity}px ${5 * intensity}px rgba(94, 46, 110, 0.25),
                               0 0 ${15 * intensity}px ${10 * intensity}px rgba(94, 46, 110, 0.2)`;
  }

  document.addEventListener('mousemove', function(e) {
    projects.forEach(project => {
      updateNeonEffect(project, e.clientX, e.clientY);
    });
  });

  // Réinitialiser l'ombre pour tous les projets lorsque la souris quitte le document
  document.addEventListener('mouseleave', function() {
    projects.forEach(project => {
      project.style.boxShadow = 'none';
    });
  });

  // Ajout de l'écouteur de 'mouseleave' pour chaque projet
  projects.forEach(project => {
    project.addEventListener('mouseleave', function() {
      project.style.boxShadow = '0 0 2px rgba(94, 46, 110, 0.2), 0 0 4px rgba(94, 46, 110, 0.2)';
    });
  });
});

const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
}
window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);