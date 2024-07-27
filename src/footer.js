export const createFooter = () => {
    const body = document.querySelector('body');
    const currentYear = new Date().getFullYear();
    
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>Currently under development by © UPRise Nexus ${currentYear}`;

    body.insertAdjacentElement("beforeend", footer);
}