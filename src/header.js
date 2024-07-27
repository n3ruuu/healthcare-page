import logo from './images/logo4.png'

export const createHeader = () => {
    const body = document.querySelector('body');
    const contentDiv = document.querySelector('#content'); 

    const header = document.createElement('header');
    
    const headerLogo = document.createElement('img');
    headerLogo.src = logo;
    const navBar = document.createElement('nav');
    
    const homeBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    const featuresBtn = document.createElement('button');
    const teamBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.className = 'home-btn';
    aboutBtn.className = 'about-btn';

    homeBtn.textContent = 'Home';
    aboutBtn.textContent = 'About';
    featuresBtn.textContent = 'Features';
    teamBtn.textContent = 'Team';
    contactBtn.textContent = 'Contact';

    navBar.append(homeBtn, aboutBtn, featuresBtn, teamBtn, contactBtn);
    header.append(headerLogo, navBar);
    body.insertBefore(header, contentDiv);
}