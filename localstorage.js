const name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let message = document.getElementById('comments').value;

popupModal.forEach((popup) => {
    const popupheader = document.createElement('h3');
    popupheader.classList = 'heading-secondary';
    popupheader.innerHTML = popup.headingSecondary;
  
    const closeButton = document.createElement('button');
    closeButton.innerHTML = popup.button;
    closeButton.classList = 'btn-close';
  
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container-work';
  
    const subheading = document.createElement('p');
    subheading.innerHTML = popup.subheading;
    subheading.className = 'subheading';
  
    const dot = document.createElement('span');
    dot.innerHTML = popup.dot;
    dot.className = 'dot';
