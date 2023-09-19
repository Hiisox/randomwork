

function initAddEventListenerPopup(){
	let openPopup = document.querySelector(".popupBackground")
	let shareButton = document.querySelector(".zonePartage button")
	shareButton.addEventListener("click", () => {
		openPopup.classList.add("active")
	})
	
	let submitButton = document.getElementById("btnEnvoyerMail")
	submitButton.addEventListener("click", (event) =>{
		event.preventDefault()
		// console.log(checkName(document.getElementById("nom").value))
		if (checkName(document.getElementById("nom").value) === true)
			openPopup.classList.remove("active")
		else
			
	})
}

function checkName(name){
	let nameRegexp = new RegExp("^[a-z]{2,}$")
	// console.log(nameRegexp.test(name))
	if (nameRegexp.test(name) === true)
		return (true)
	else
		return (false)
}