// function choseLevel(){
// 	let userWord = prompt("tapez \"mots\" ou \"phrases\" pour choisir votre niveau")

// 	while(userWord !== "mots" && userWord !== "phrases"){
// 		userWord = prompt("tapez \"mots\" ou \"phrases\" pour choisir votre niveau")
// 	}
// 	return (userWord)
// }

// function gameWhile(gameTab){
// 	let score = 0
// 	for (let i = 0; i < (gameTab.length - 1); i++){
// 		userWord = prompt(gameTab[3] + gameTab[i])
// 		if (userWord === gameTab[i]){
// 			score++;
// 		}
// 		writeResult(score, i)
// 	}
// 	return score
// }

function writeResult(result, nbWord){
	let score = document.querySelector(".zoneScore span")
	score.textContent = result + " / " + nbWord
}

function changeWord(gameLevel, i){
	let wordDisplay = document.querySelector(".zoneProposition")
	if (i >= gameLevel.length - 1)
		wordDisplay.textContent = "le jeu est fini"
	else{
		wordDisplay.textContent = gameLevel[i]
	}
}

function launchGame(){
	let gameLevel = words;
	let i = 0
	let score = 0
	
	writeResult(score, i)
	changeWord(gameLevel, i)
	
	let myRadio = document.querySelectorAll("input[type=radio]")
	for (let index = 0; index < myRadio.length; index++){
		myRadio[index].addEventListener("change", (event) =>{
			if (event.target.id === "mots"){
				gameLevel = words
			}else{ 
				gameLevel = listSentence
			}
			changeWord(gameLevel, i)
		})
	}
	
	let mybutton = document.getElementById("btnValiderMot");
	mybutton.addEventListener("click", () => {
		let entry = document.getElementById("inputEcriture")
		if (entry.value == gameLevel[i])
			score++
		i++
		if (i <= gameLevel.length - 1){
			changeWord(gameLevel, i)
			writeResult(score, i)
		}
		if (i === gameLevel.length - 1){
			mybutton.disabled = true
		}
		entry.value = ""
	})

}
