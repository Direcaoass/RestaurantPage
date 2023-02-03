import './assets/css/style.css';
import createContact from './modules/contact.js'
import createHome from './modules/home.js';
import createMenu from './modules/menu.js'



(function createPage() {
    const divContent = document.getElementById('content')
    let mainContent
    const header = `<div class="header"><h1>header</h1><div class='menu'><ul><li id='home'> <a href="">Home</a></li> <li id='menu'><a href="">Menu</a></li><li id='contact'><a href="">Contact</a></li></ul></div></div>`;

    setMainContent(createHome())


    function setMainContent(content) {
        mainContent = `<div class="mainContent">${content}</div>`;
        divContent.innerHTML = header + mainContent;
        getNavOption()
    }

    function getNavOption() {
        const homeBtn = document.getElementById('home');
        const menuBtn = document.getElementById('menu');
        const contactBtn = document.getElementById('contact');

        homeBtn.addEventListener('click', (e) => { e.preventDefault(); setMainContent(createHome()) });
        menuBtn.addEventListener('click', (e) => { e.preventDefault(); setMainContent(createMenu()); });
        contactBtn.addEventListener('click', (e) => {e.preventDefault(); setMainContent(createContact()); });

    }

})()