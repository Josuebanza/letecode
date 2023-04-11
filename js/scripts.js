// Api 
// JSOn
// fetch();  


const coursListeView = document.querySelector('.cours-list');
const navigateur = document.querySelector('.navigation');
const btnNav = document.querySelector('.btn-nav');

btnNav.addEventListener('click',() =>{
    navigateur.style.visibility = "visible";
})



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


















/* fetch('js/cours.json').then(function(reponse){
    return reponse.json()
})
.then(function(data){

}); */

