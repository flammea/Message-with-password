// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

//Rozwiązanie nr 3 

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];
const div = document.querySelector("div");
const lowerCasePasswords = passwords.map(password => password.toLowerCase());

const showMessage = (e) => {

    const text = e.target.value.toLowerCase();

    for (let i = 0; i < lowerCasePasswords.length; i++) {
        if (lowerCasePasswords[i] === text) {
            div.textContent = messages[i]
        }
    }
}

input.addEventListener("input", showMessage)