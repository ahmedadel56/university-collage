// creating mobile menue elements
const div = document.createElement('div');
const content = document.createElement('div');
const closeBtn = document.createElement('a');
closeBtn.innerHTML = '&times;';

div.appendChild(closeBtn);
div.appendChild(content);

let link = document.createElement('a');
link.href = './about.html';
link.textContent = 'About';
link.className = 'nav-click';
content.appendChild(link);

link = document.createElement('a');
link.href = '#program';
link.textContent = 'Program';
link.className = 'nav-click';
content.appendChild(link);

link = document.createElement('a');
link.href = '#partners';
link.textContent = 'Sponsor';
link.className = 'nav-click';
content.appendChild(link);

link = document.createElement('a');
link.href = '#';
link.textContent = 'News';
link.className = 'nav-click';
content.appendChild(link);

// adding attributes to mobile menue items
div.id = 'container';
div.className = 'mobile-menu';
closeBtn.className = 'closebtn';
content.className = 'content';
document.body.appendChild(div);

// adding functionality to elements

const icon = document.querySelector('#menu-icon');

function openContainer() {
  document.getElementById('container').style.height = '100%';
}

function closecContainer() {
  document.getElementById('container').style.height = '0%';
}

icon.addEventListener('click', openContainer);
closeBtn.addEventListener('click', closecContainer);
const navLink = document.querySelectorAll('.nav-click');
navLink.forEach((a) => a.addEventListener('click', closecContainer));