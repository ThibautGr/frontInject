let arrayh2 = document.querySelectorAll("h1") // target to clone
let itemstring = "init";
arrayItemstring = [];
arrayh2.forEach(function(item) {
    itemstring = item.outerHTML;
    arrayItemstring.push(itemstring);
});
let possibility = []
let numberTarget = 0;
let pattenr = "kb-"+ numberTarget; // target id
//organisation
let topp = document.querySelector('.article-title-outer');
let newUl = document.createElement("ul");
topp.appendChild(newUl);
for(var i = 0; i < arrayItemstring.length; i++ ){
    numberTarget ++;
    pattenr = "kb-"+ numberTarget;
    possibility.push(pattenr);
}
let result= [];
for (var i = 0; i < possibility.length; i++ ){
    for (var j = 0; j < arrayItemstring.length ; j ++){
        if(arrayItemstring[j].search(possibility[i]) != -1 ){
            result.push(possibility[i]);
            let elem = document.querySelector('#'+possibility[i]);
            // Create a copy of it
            var clone = elem.cloneNode(true);
            //create element how to inject in clone
            var aTag = document.createElement('a');
            aTag.setAttribute('href',"#"+possibility[i] );
            aTag.setAttribute('title', 'ce rendre à cette partie');
            aTag.innerText = "#";
            // Update the ID and add a class
            clone.id = 'elem'+ i;
            clone.classList.add('small');
            // Inject it into the DOM

            let newLI = document.createElement("li");

            newUl.appendChild(newLI);
            topp.after(newUl);
            newLI.appendChild(clone);
            clone.appendChild(aTag);
        }
        else {
            stop();
        }
    }
}
