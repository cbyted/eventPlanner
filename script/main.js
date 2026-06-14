const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")

const avoidCursor = () => {
    var x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    var y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

const loadFormPage = () => {
    window.location.href = "form-page.html"
}

yesBtn.addEventListener('click', loadFormPage);
noBtn.addEventListener('click', avoidCursor);
noBtn.addEventListener('mouseenter', avoidCursor);