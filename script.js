const boutonAjouter = document.querySelector('#Bouton-ajouter')
const listeDeTaches = document.querySelector('.mestaches')
const monInput = document.querySelector('#input')
const bb = document.querySelectorAll('.bb')

boutonAjouter.onclick = ajouterTache


function ajouterTache() {

    if(monInput.value != "") {
        listeDeTaches.innerHTML += `
            <div class="LT">
                <p class="liste-item">${monInput.value}</p>
                <div class="buttonContainer">
                    <button id="done">&#10004;</button>
                    <button id="delete">&#128465;</button>
                </div>
            </div>
        `  
    }

    const taches = document.querySelectorAll('.LT')

    monInput.value = ""

    for(let i = 0; i < taches.length; i++){
        taches[i].children[1].children[0].addEventListener('click', function(){
            taches[i].children[0].classList.toggle('fait')
        })
    }
      
    for (let i = 0; i < taches.length; i++) {
        taches[i].children[1].children[1].addEventListener('click', function(){
            taches[i].remove()
        })
    }   
}

console.log(bb)
for(let i = 0; i < bb.length; i++){
    console.log(bb[i])
    bb[i].addEventListener('click', function(){
        bb[i].style = "color: yellow"
    })
}