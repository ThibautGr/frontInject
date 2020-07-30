// Get the element
// prochaine étape automatisé l'algo de modification du DOM

let elem = document.querySelector('#kb-1');
let topp = document.querySelector('.article-title-outer');
// Create a copy of it
let clone = elem.cloneNode(true);

//create element how to inject in clone
let aTag = document.createElement('a');
aTag.setAttribute('href',"#kb-1");
aTag.innerText = "link text";
// Update the ID and add a class
clone.id = 'elem2';
clone.classList.add('small');


// Inject it into the DOM
topp.after(clone);
clone.appendChild(aTag);

//second

// Inject it into the DOM
topp.after(clone);
clone.appendChild(aTag);

// Get the element
let elem2 = document.querySelector('#kb-2');
let topp2 = document.querySelector('.article-title-outer');
// Create a copy of it
let clone2 = elem.cloneNode(true);

//create element how to inject in clone
let aTag2 = document.createElement('a');
aTag2.setAttribute('href',"#kb-2");
aTag2.innerText = "link text";
// Update the ID and add a class
clone2.id = 'elem3';
clone2.classList.add('small');


// Inject it into the DOM
topp2.after(clone2);
clone2.appendChild(aTag2);