const worksection = document.getElementById('portfolio');
const popupsec = document.getElementById('popsec');
const articles = [
  {
    image: '<img class="desktop" src="images/Snapshoot Portfolio - Copy.png" alt=""></img><img class="mobile" src="images/Snapshoot Portfolio (2).png" alt="">',
    name: 'Tonic',
    class: 'sections',
    details: ['CONOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
    button: 'see',
    buttonId: 'closePopUp4',
  },
  {
    image: '<img class="desktop" src="images/desktop2.opng.png" alt=""></img><img class="mobile" src="images/Snapshoot Portfolio (1).png" alt=""></img>',
    name: 'Tonic',
    class: 'sections reverse',
    details: ['CONOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
    button: 'see',
    buttonId: 'closePopUp3',
  },
  {
    image: '<img class="desktop" src="images/desktop2.opng.png" alt=""></img><img class="mobile" src="images/Snapshoot Portfolio.png" alt=""></img>',
    name: 'Tonic',
    class: 'sections',
    details: ['CONOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
    button: 'see',
    buttonId: 'closePopUp2',
  },
  {
    image: '<img class="desktop" src="images/desktop4.png.png" alt=""></img><img class="mobile" src="images/Snapshoot Portfolio (3).png" alt=""></img>',
    name: 'Tonic',
    class: 'sections reverse',
    details: ['CONOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
    button: 'see',
    buttonId: 'closePopUp1',
  },
];

for (let i = 0; i < articles.length; i += 1) {
  const fetch = document.getElementById('portfolio').innerHTML;
  worksection.innerHTML = `<article class="${articles[i].class}">
<div class="scrnshot width">
    ${articles[i].image}
   <!-- <img class="mobile" src="images/Snapshoot Portfolio (2).png" alt="">
    <img class="desktop" src="images/Snapshoot Portfolio - Copy.png" alt="">-->
</div>
<div class="width">
    <h2 class="colorh2">Tonic</h2>
    <div class="canopy">
        <h4 class="colorh4">CANOPY</h4>
        <ul>
            <li class="canopylist">
                <span>
                    <img width="8px" height="8px" src="images/Ellipse 12.png" alt="">
                </span>
                <p>Back End Dev</p>
            </li>
            <li class="canopylist">
                <span>
                    <img width="8px" height="8px" src="images/Ellipse 12.png" alt="">
                </span>
                <p>2015</p>
            </li>
        </ul>
    </div>
    <p class="text">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
    <ul>
        <li class="languages">HTML</li>
        <li class="languages">CSS</li>
        <li class="languages">JavaScript</li>
    </ul>
    <div class="seeproject">
        <button class = '${articles[i].button}'>See project</button>
    </div>
</div>
</article> 
<!-- pop up code-->
<div id="popOverlay" class="popoverlay absolute">
<div class="pop">
    <div class="pophead">
        <h2>${articles[i].name}</h2>
        <button id="close" class="${articles[i].buttonId}" type="button">&times;</button>
    </div>
    <div class="canopyContainer">
        <h4 class="colorh4 blue">Canopy</h4>
        <p><span><img src="" alt="">Back End Dev</span> <span><img src="" alt="">2015</span></p>
    </div>
    <div class="popscreanshort">
    ${articles[i].image}
    </div>
    <div class = 'popupGrid'>
        <div class="popupParagraph paddingPop">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, quo nobis exercitationem cum dolorem sapiente maxime dolores iusto? Provident veniam sequi aut itaque  </p> <br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, quo nobis exercitationem cum dolorem sapiente maxime dolores iusto? Provident veniam sequi aut itaque  </p>
        </div>
        <div class=".paddingPop">
          <div class="technologies">
            <div>HTML</div>
            <div>css</div>
            <div>Ruby</div>
            <div>BootsTrap</div>
          </div>
          <div class="buttons">
            <button type="submit">SeeLive</button>
            <button type="submit">SeeSource</button>
          </div>
        </div>
    </div>
</div>
</div>${fetch}`;
}

const popUp = document.getElementById('popOverlay');
function popUpWindow() {
  popUp.style.display = 'flex';
  popupsec.style.visibility = 'visible';
}
function closeWindow() {
  popUp.style.display = 'none';
  popupsec.style.visibility = 'hidden';
}

const closePopUpWIndow = document.getElementById('close');
closePopUpWIndow.addEventListener('click', closeWindow);
const openPopUpWindow = document.querySelectorAll('.see');
for (let i = 0; i < openPopUpWindow.length; i += 1) {
  openPopUpWindow[i].addEventListener('click', popUpWindow);
}
