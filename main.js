
let cards = [0]
let lists = {
"allmänt":[
{"cardId":"card-1", "desc":"hej", "id":1, "done":true}

]



}

let selectedList = ''
let selectListEl = document.getElementById('selectList')

for(let i=0; i<Object.keys(lists).length; i++){
 selectListEl.innerHTML += `
  <option value="${Object.keys(lists)[i]}">
  ${Object.keys(lists)[i]}
 </option>

`


}
selectedList = Object.keys(lists)[0]

let container = document.getElementById('container')

var newCardId = cards.length

function deleteCard(id){
console.log(id)
document.getElementById(id).outerHTML = ""
let index = cards.findIndex(item => item === id)
cards.splice(index,1)
console.log(cards)
}


function createCard(){




newCardId = cards.length + 1
console.log(newCardId)
let cardText = document.getElementById('todoInput').value

container.innerHTML += `<div class='card' id='card-${newCardId}'>
	<p>${cardText}</p>
	<div class='card-actions'>
		<button class='card-done' onclick="doneCard('card-${newCardId}')">Klar</button>
		<button class='card-delete' onclick="deleteCard('card-${newCardId}')">Ta bort</button>
	</div>
</div>`



cards.push(newCardId)
console.log('created card', newCardId, "cards:", cards)

}

function loadCards(){
let listNames = Object.keys(lists)

 for(let j=0; j<lists[selectedList].length; j++){
   console.log(lists[selectedList][j])
   if(lists[selectedList][j].done){
	container.innerHTML +=  `<div class='card done' id='${lists[selectedList][j].cardId}'>
	<p>${lists[selectedList][j].desc}</p>
	<div class='card-actions'>
		<button class='card-done' onclick="doneCard(${lists[selectedList][j].cardId})">Klar</button>
		<button class='card-delete' onclick="deleteCard(${lists[selectedList][j].cardId})">Ta bort</button>
	</div>
        </div>`
   }else{
	container.innerHTML +=  `<div class='card' id='${lists[selectedList][j].cardId}'>
	<p>${lists[selectedList][j].desc}</p>
	<div class='card-actions'>
		<button class='card-done' onclick="doneCard(${lists[selectedList][j].cardId})">Klar</button>
		<button class='card-delete' onclick="deleteCard(${lists[selectedList][j].cardId})">Ta bort</button>
	</div>
        </div>`

   }
   
 }

}


function doneCard(id){
document.getElementById(id).children[0].style.textDecoration = "line-through";
document.getElementById(id).style.backgroundColor = 'rgb(81, 252, 101)';

console.log(id)

}

loadCards()