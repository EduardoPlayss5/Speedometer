const speedText = document.getElementById("speed");

document.getElementById("startBtn").addEventListener('click', () => {
    navigator.geolocation.watchPosition(updatePosition, handleError);
});

function handleError(error) {
    console.error(error.message);
}

function updatePosition(position){
    speedText.textContent = (position.coords.speed * 3.6).toFixed(1)
}