/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

//creation lien


var divElem = document.createElement("div");
document.getElementById("contenu").appendChild(divElem); 

//creation formulaire
var formElem = document.createElement("form");

var pForm = document.createElement("p");

var inputTitre = document.createElement("input");
inputTitre.setAttribute("type", "text");
inputTitre.setAttribute("name", "title");
inputTitre.setAttribute("id", "titre");
inputTitre.setAttribute("placeholder", "Ajoutez un titre");

var inputAuteur = document.createElement("input");
inputAuteur.setAttribute("type", "text");
inputAuteur.setAttribute("name", "auteur");
inputAuteur.setAttribute("id", "auteur");
inputAuteur.setAttribute("placeholder", "Ajoutez un auteur");

var inputUrl = document.createElement("input");
inputUrl.setAttribute("type", "url");
inputUrl.setAttribute("name", "lien");
inputUrl.setAttribute("id", "lien");
inputUrl.setAttribute("placeholder", "Entrer l'url");

var inputButton = document.createElement("input");
inputButton.setAttribute("type", "submit");
inputButton.setAttribute("value", "Ajouter");
inputButton.setAttribute("id", "bouton");

pForm.appendChild(inputAuteur);
pForm.appendChild(inputTitre);
pForm.appendChild(inputUrl);
pForm.appendChild(inputButton);
formElem.appendChild(pForm);

function creerlien(liens){
    var classElem = document.createElement("div");
    classElem.classList.add("lien");
    classElem.style.background = "white";
    classElem.style.padding = "10px";
    classElem.style.marginBottom = "10px";
    
    var hElem = document.createElement("h2");
    
    var aElem = document.createElement("a");
    aElem.href = liens.url;
    aElem.textContent = liens.titre
    aElem.style.textDecoration = "none";
    aElem.style.color = "#428bca";   
    
    var spanElem = document.createElement("span");
    spanElem.textContent = liens.url;
    spanElem.style.fontWeight = "normal";
    spanElem.style.fontSize = "80%";
    spanElem.style.paddingLeft = "10px";

    var pElem = document.createElement("p");
    pElem.textContent = "ajouté par " +liens.auteur;
    
    hElem.appendChild(aElem);
    hElem.appendChild(spanElem);
    classElem.appendChild(hElem);
    classElem.appendChild(pElem);
    divElem.appendChild(classElem);
}


//bouton ajouter lien
var buttonForm = document.createElement("div");
var buttonElt = document.createElement("button");
buttonElt.textContent = "Ajouter un lien";
buttonForm.appendChild(buttonElt);

buttonElt.addEventListener("click", function() {
    buttonForm.innerHTML = "";
    buttonForm.appendChild(formElem);
})
document.getElementById("contenu").appendChild(buttonForm);

//message info


inputButton.addEventListener("click", function() {
    var info = document.createElement("h2");
    info.textContent = "Le lien  a bien été ajouté";
});


//recup valeur input
formElem.addEventListener("submit", function(e) {
    e.preventDefault();
    var link = {
            titre: formElem.elements.title.value,
            url: formElem.elements.lien.value,
            auteur: formElem.elements.auteur.value
        };
    creerlien(link);
    return false;
});

listeLiens.forEach(function(liens){
    creerlien(liens);
});































