import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import Dash from './images/dash.png'

export const loadAbout = () => {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = ''
    contentDiv.style.flexDirection = 'row'
    contentDiv.style.marginTop = 0;

    const imageContainer = document.createElement('div');
    imageContainer.className = 'left';
    
    const leftImages = document.createElement('div');
    leftImages.className = 'left-img';

    const img1 = document.createElement('img');
    img1.src = image1;
    const img2 = document.createElement('img');
    img2.src = image2;

    const rightImage = document.createElement('div');
    rightImage.className = 'right-img';

    const img3 = document.createElement('img');
    img3.src = image3;
   
    const textContainer = document.createElement('div');
    textContainer.className = 'right';

    const aboutUsText = document.createElement('div');
    aboutUsText.classList = "about-us-text";

    const paraText = document.createElement('p');
    paraText.textContent = 'ABOUT US';

    const dash = document.createElement('img');
    dash.className = 'dash'
    dash.src = Dash;

    const aboutHeader = document.createElement('div');
    aboutHeader.className = 'about-header';
    aboutHeader.innerHTML = `<em>Innovating Health, </em><br> One Block at a Time`;

    const paraText2 = document.createElement('p');
    paraText2.textContent = 'NexusPulse revolutionizes healthcare information management by leveraging the power of blockchain technology. With unparalleled security and transparency, we ensure the confidentiality and integrity of your medical records, empowering both patients and healthcare providers.'

    leftImages.append(img1, img2);
    rightImage.append(img3);
    imageContainer.append(leftImages, rightImage);
    aboutUsText.append(paraText, dash);
    textContainer.append(aboutUsText, aboutHeader, paraText2);
    contentDiv.append(imageContainer, textContainer);
}