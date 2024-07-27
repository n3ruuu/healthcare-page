export const loadHome = () => {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    contentDiv.style.flexDirection = 'column';
    contentDiv.style.marginTop = '150px';

    const heroText = document.createElement('p');
    heroText.className = 'hero';
    
    const spanText = document.createElement('span');
    spanText.className ='healthcare';
    spanText.textContent = 'Healthcare';

    heroText.innerHTML = `A <span class="healthcare">Healthcare</span> Information <br> Management System`;

    const subHeroText = document.createElement('p');
    subHeroText.className = 'sub-hero';
    subHeroText.textContent = `Securing Your Data: Ensuring the Safety, Integrity, and Accessibility of Your Records`

    contentDiv.append(heroText, subHeroText);
}