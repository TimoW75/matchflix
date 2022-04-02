const form = document.querySelector(".pe");

if (form) {
form.addEventListener("submit", (event) => {
    // Zorg dat de melding nog niet tevoorschijn komt
	event.preventDefault();
    // Roep de velden aan die gechecked moeten worden
	const inputs = event.target.querySelectorAll("input");
    // Geeft aan waar error te staan komt
	const errormelden = event.target.querySelector(".error");
	if (!inputs[0].value || !inputs[1].value) {
        // css voor error melding
        errormelden.classList.add("errorcss");
        // Tekst van de melding
		errormelden.innerHTML = "Niet alle invoervelden zijn ingevuld!";
	} else {
		event.target.submit();
	}
});
}