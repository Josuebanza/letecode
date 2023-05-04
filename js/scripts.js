
const coursListeView = document.querySelector('.cours-list');
const memberListeView = document.querySelector('.member-list');
const navigateur = document.querySelector('.navigation');
const btnOn = document.querySelector('.btn-on');
const btnOff = document.querySelector('.btn-off');

if (coursListeView) {

    fetch('js/cours.json').then((reponse) => reponse.json())
        .then((data) => {
            console.log(data)
            let courses = data;

            for (const cours of courses) {
                coursListeView.innerHTML +=
                    `    <div class="cours">
                             <div><img src="${cours.image}" alt="${cours.name}" id="${cours.id}"></div>
                             <iv><label for="${cours.id}">${cours.name}</label></div>
                         </div> `
            }
        });
}

if (memberListeView) {

    fetch('js/communaute.json').then((reponse) => reponse.json())
        .then((data) => {
            console.log(data)
            let members = data;
            for (const membre of members) {
                memberListeView.innerHTML +=
                    `    <div class="membre">
                             <div><img class="profil" src="${membre.image}" alt="${membre.name}'s profil" id="${membre.id}" ></div>
                             <iv><label for="${membre.id}">${membre.name}</label></div>
                         </div> `
            }
        });
}

// Un bouton de navigateur

btnOn.addEventListener('click', (e) => {
    e.preventDefault()
    btnOff.style.visibility = "visible"
    navigateur.style.visibility = "visible"
    btnOn.style.visibility = "hidden"
})
btnOff.addEventListener('click', (e) => {
    e.preventDefault()
    navigateur.style.visibility = "hidden"
    btnOn.style.visibility = "visible"
    btnOff.style.visibility = "hidden"  
})

//
/* fetch('js/cours.json').then(function(reponse){
    return reponse.json()
})
.then(function(data){

}); */
