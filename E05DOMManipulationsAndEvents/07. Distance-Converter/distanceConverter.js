function attachEventsListeners() {
    let button = document.getElementById('convert');
    button.addEventListener('click', onClick);

    let units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function onClick(ev){
        let from = document.getElementById('inputUnits').value;
        let to = document.getElementById('outputUnits').value;

        let inputDistance = Number(document.getElementById('inputDistance').value);
        let outputDistance = document.getElementById('outputDistance');
        let inMeters = inputDistance * units[from];
        let convertedValue = inMeters / units[to];
        outputDistance.value = convertedValue;
    }
}