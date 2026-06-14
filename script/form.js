const selectedActivity = document.querySelector('input[name="actividad"]:checked');
const customActivity = document.getElementById("customActivity").value.trim();

if (!selectedActivity && !customActivity) {
    alert(
        "Elige una actividad o escribe una personalizada."
    );
    return;
}
