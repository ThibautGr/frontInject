// Get the element
// prochaine étape automatisé l'algo de modification du DOM
//let numberTarget = 1;
//let elem = document.querySelector('#kb-1');
//let search = 'kb-' + numberTarget;
//alert(search)
//alert(elem)
//let elemString = elem.outerHTML; // convertie l"élément querryselector en str, mais toute la selection est convertie
//alert(elemString)


// ALT 3
/*
[arrayh2].forEach((el) => {
    console.log(el);
});
*/
// ALT 2
/*
for (var el of arrayh2) {
    console.log("hello")
    console.log(el); // or some other action
}
*/
/*
Array.from(arrayh2).forEach(function(el) {
    //console.log(el);
});
*/

// this way is the better ! for loop on all ellement who we whant !!

let arrayh2 = document.querySelectorAll("h1")
let itemstring = "init";
arrayItemstring = [];
//alert("monarrydeux" + arrayh2);
arrayh2.forEach(function(item) {
    //alert("je passe dans la boucle")
    itemstring = item.outerHTML;
    //alert("mon item :" +itemstring);
    arrayItemstring.push(itemstring);
});
console.log(arrayItemstring);
let possibility = []
let numberTarget = 0;
let pattenr = "kb-"+ numberTarget;

for(var i = 0; i < arrayItemstring.length; i++ ){
    numberTarget ++;
    pattenr = "kb-"+ numberTarget;
    possibility.push(pattenr);
}
console.log(possibility)
/*
crée une boucle qui iter pour remplire une tableau à partir du tableau aux dessus
 */
//let possibility = ['kb-1', 'kb-2', 'kb-3', "kb-4"]; // tableau généré par le script au dessus
let result= [];
for (var i = 0; i < possibility.length; i++ ){
    for (var j = 0; j < arrayItemstring.length ; j ++){
        if(arrayItemstring[j].search(possibility[i]) != -1 ){
            //alert(arrayItemstring[j])
            result.push(possibility[i]);
            let elem = document.querySelector('#'+possibility[i]);
            var topp = document.querySelector('.article-title-outer');
// Create a copy of it
            var clone = elem.cloneNode(true);

//create element how to inject in clone
            var aTag = document.createElement('a');
            aTag.setAttribute('href',"#"+possibility[i]);
            aTag.innerText = "link text"+ possibility[i];
// Update the ID and add a class
            clone.id = 'elem'+ i;
            clone.classList.add('small');


// Inject it into the DOM
            topp.after(clone);
            clone.appendChild(aTag);
            //second

// Inject it into the DOM
            topp.after(clone);
            clone.appendChild(aTag);
        }
        else {
            // alert("stop")
            stop();
        }
    }
    // alert("boucle for passage du tableau artificiel");
}
console.log(result);


/*
if( elemString.search(search) != -1 ) {


    var topp = document.querySelector('.article-title-outer');
// Create a copy of it
    var clone = elem.cloneNode(true);

//create element how to inject in clone
    var aTag = document.createElement('a');
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
}
else {
    alert("stop")
    stop();
}



// Get the element
let elem2 = document.querySelector('#kb-2');
let topp2 = document.querySelector('.article-title-outer');
// Create a copy of it
let clone2 = elem2.cloneNode(true);

//create element how to inject in clone
let aTag2 = document.createElement('a');
aTag2.setAttribute('href',"#kb-2");
aTag2.innerText = "link text";
// Update the ID and add a class
clone2.id = 'elem2';
clone2.classList.add('small');


// Inject it into the DOM
topp2.after(clone2);
clone2.appendChild(aTag2);

 */