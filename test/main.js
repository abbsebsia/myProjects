cards = []
let lists = {
"allmänt":[


],


}

let selectedList = ''
let selectListEl = document.getElementById('selectList')
let newListInput = document.getElementById('newListInput')

for(let i=0; i<Object.keys(lists).length; i++){
 selectListEl.innerHTML += `
  <option value="${Object.keys(lists)[i]}">
  ${Object.keys(lists)[i]}
 </option>

`


}
selectedList = Object.keys(lists)[0]

let container = document.getElementById('container')

selectListEl.addEventListener("change", function (){

selectedList = selectListEl.value
console.log(selectListEl.value)
loadCards()


});

var newCardId = cards.length



function addList(){
if(newListInput.value == '' || lists[newListInput.value]){return}


	
	 console.log('added list')
	lists[newListInput.value] = []
	console.log(lists)
	selectListEl.innerHTML += `
  <option value="${newListInput.value }">
  ${newListInput.value}
 </option>

`


	

}

function deleteCard(id){
console.log(id)

}


function createCard(){

newCardId = cards.length + 1
let cardText = document.getElementById('todoInput').value

lists[selectedList].push(
{"cardId":`card-${newCardId}`, "desc":cardText, id:newCardId, "done":false}
)

loadCards()


cards.push(newCardId)
console.log('created card', newCardId, "cards:", lists)

}

function loadCards(){
let listNames = Object.keys(lists)
container.innerHTML = ''
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