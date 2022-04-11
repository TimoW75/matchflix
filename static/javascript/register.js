const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const inputs = event.target.querySelectorAll("input");
	const errorLabel = event.target.querySelector("p.error");
	if (!inputs[0].value || !inputs[1].value || !inputs[2].value || !inputs[3].value || !inputs[4].value) {
		errorLabel.classList.add("error");
        errorLabel.classList.remove("hidden");
		errorLabel.innerHTML = "<span>Error:</span> Niet alle invoer velden zijn ingevuld!";
		inputs.forEach(element => {
			element.classList.add("foute-input");
		});
	} else {
		if (inputs[3].value === inputs[4].value) {
			event.target.submit();
		} else {
			errorLabel.classList.add("error");
            errorLabel.classList.remove("hidden");
			errorLabel.innerHTML = "<span>Error:</span> Wachtwoorden komen niet overeen met elkaar!";
			inputs[0].classList.remove("foute-input");
			inputs[1].classList.remove("foute-input");
            inputs[2].classList.remove("foute-input");
			inputs[3].classList.add("foute-input");
			inputs[4].classList.add("foute-input");
		}
	}
});