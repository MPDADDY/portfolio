const projects = [
  'tonic',
  'multi-post stories',
  'tonic2',
  'mlti-poststories2',
]; /** name copied */
const workSection = document.getElementById('portfolio');
const popup = document.getElementById('popup');
const closePopUp = document.getElementById('closePopUp');
const openpop = document.getElementsByClassName('openpop');
/* const myarticles = document.querySelectorAll('.sections'); */
const viewPortWidth = window.innerWidth;
const allProjects = [
  {
    name: ['tonic', 'multi-post stories', 'tonic2', 'mlti-poststories2'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'featured image': {
      desktopImages: [
        '<img class="desktop" src="images/Snapshoot Portfolio - Copy.png" alt=""></img>',
        '<img class="desktop" src="images/desktop2.opng.png" alt=""></img>',
        '<img class="desktop" src="images/desktop3.png.png" alt=""></img>',
        '<img class="desktop" src="images/desktop4.png.png" alt=""></img>',
      ],
      mobileImages: [
        '<img class="mobile" src="images/Snapshoot Portfolio (2).png" alt="">',
        '<img class="mobile" src="images/Snapshoot Portfolio (1).png" alt="">',
        '<img class="mobile" src="images/Snapshoot Portfolio.png" alt="">',
        '<img class="mobile" src="images/Snapshoot Portfolio (3).png" alt="">',
      ],
    },
    technologies: '',
    'link to live version': '',
    'link to source': '',
  },
];

const mobileImg = allProjects[0]['featured image'].mobileImages;
const desktopImg = allProjects[0]['featured image'].desktopImages;

// eslint-disable-next-line no-plusplus
for (let i = 0; i < projects.length; i++) {
  const fetch = document.getElementById('portfolio').innerHTML;

  if (viewPortWidth >= '768px') {
    if (i % 2 === 0) {
      workSection.classList.add('reverse');
    }
  }

  workSection.innerHTML = `<article class="sections">
    <div class="scrnshot width">
        ${mobileImg[i]}
        ${desktopImg[i]}
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
        <div class="seeproject" onclick="openPopUp()">
            <a title="#" href="#">See project</a>
        </div>
    </div>
    </article> ${fetch}`;
}

/**  open pop */
function openPopUp() {
  popup.style.display = 'block';
}
function closepopUp() {
  popup.style.display = 'none';
}
closePopUp.addEventListener('click', closepopUp);
openpop.addEventListener('click', openPopUp);
