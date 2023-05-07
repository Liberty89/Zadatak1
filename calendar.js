function resetKalendara() {
    document.getElementById('title').innerText = '';
    document.getElementById('dani').innerHTML = '';
}

function popuniKalendar(godina, mesec) {
    resetKalendara();

    let imenaMeseci  = [
        'januar', 'februrar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'semptebar', 'oktobar', 'novembar', 'decembar'

    ];

    var i = 0

    let imeIzabranogMeseca = imenaMeseci[mesec - 1];

    let t = imeIzabranogMeseca + '' + godina;

    document.getElementById('title').innerText = t;

    let prvi = new Date(godina, mesec-1, 1);
    let kraj = new Date(godina, mesec, 0);

    let dUNP = prvi.getDay();
    if (dUNP == 0) dUNP = 7;

    let dUNK = kraj.getDay();
    if (dUNK == 0) dUNK = 7;

    let brojDana = kraj.getDate();

    let dani = [];

    for (let i = 1; i < dUNP; i++) {
        dani.push('');
    }

    for (let dan = 1; dan <= brojDana; dan++) {
        dani.push(dan);
    }

    for (let i = dUNK; i < 7; i++) {
        dani.push('');
    }

    let nedelje = [];

    while (dani.length > 0) {
        let narednaNedelja = dani.splice(0, 7);
        nedelje.push(narednaNedelja);
    }

    popuniTeloKalendara(nedelje);

}

function popuniTeloKalendara(nedelje) {
    for (let nedelja of nedelje) {
        let red = document.createElement('tr');

        for (let dan of nedelja) {
            let td = document.createElement('td');
            td.innerText = dan;
            red.appendChild(td);
        }

        document.getElementById('dani').appendChild(red);
    }
}


window.addEventListener('load', main);

function main() {
    let sada = new Date();

    popuniKalendar(sada.getFullYear(), sada.getMonth()+1);

    for( let day of document.getElementsByTagName('td') ) {
        if ( sada.getDate( ) == day.innerText ) {
            day.classList.add('druga-smena')
            ;


        }
    }

}