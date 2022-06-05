function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');
    gradientBox.addEventListener('mousemove', onMouseMove);
    const result = document.getElementById('result');

    function onMouseMove(ev){
        result.textContent = Math.floor(ev.offsetX / gradientBox.clientWidth * 100);
        result.textContent += '%';
    }
}