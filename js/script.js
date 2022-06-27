/*

 # Seguiamo tutti i vari step:

 $ MILESTONE 1
 Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in
 modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi
 concentrare solamente sull'aspetto logico.

 $ MILESTONE 2
 Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array
 fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure
 utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa
 fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

 $ MILESTONE 3
 Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo
 il posto della precedente.

 @ BONUS 1:
 Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca la
  freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima
  miniatura se l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.
 @ BONUS 2:
 Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a
 quella attiva, scegliete liberamente se scurire le altre immagini oppure se evidenziarla semplicemente
 con un bordo. Tra queste miniature, quella corrispondente all'immagine attiva deve evidenziarsi,
 scegliete voi l'effetto estetico, potete colorarla diversamente rispetto alle altre o aggiungere un
 semplice bordo.

 todo Prima di partire a scrivere codice:
 Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima,
 come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche
 settimana la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare
 alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere
 di vista il focus dell'esercizio.

 * Consigli del giorno:
 1. Costruiamo del carosello una versione statica contenente un'immagine grande con del testo
  ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo
  (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli
  come "template".

 2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare

 3. Al momento giusto (starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
 Buon lavoro e buon divertimento!

 */

// $ MILESTONE 1

//Svolto in HTML

// $ MILESTONE 2

//  Costruiamo un vettore di immagini per poi distribuirle in pagina servendoci di un ciclo for


// * 1) Bersagliamo i tag che dovranno contenere le immagini
// const carousel = document.getElementById('carousel');
// const gallery = document.getElementById('gallery');

//  * 2) Costruiamo il vettore di immagini
// const imgVector = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

// * 3) Realizziamo un ciclo for in modo tale da riempire la gallery
// for (let i = 0; i < imgVector.length; i++) {
//     const element = document.createElement('img');
//     element.src = imgVector[i];
//     element.classList.add('d-none')
//     gallery.appendChild(element);
// }

// * 4) Bersagliamo i bottoni realizzati mediante le freccette

// const rightBtn = document.querySelector('.fa-chevron-right');
// const leftBtn = document.querySelector('.fa-chevron-left');

// * 5) Implemento il comportamento dei bottoni 

// const allImages = document.querySelectorAll('#carousel img');
// let currentIndex = 0;
// allImages[currentIndex].classList.remove('d-none');
// allImages[currentIndex].classList.add('d-block');

// rightBtn.addEventListener('click', function () {
//     if (currentIndex < imgVector.length - 1) {
//         allImages[currentIndex].classList.remove('d-block');
//         allImages[currentIndex].classList.add('d-none');

//         currentIndex++;
//         allImages[currentIndex].classList.remove('d-none');
//         allImages[currentIndex].classList.add('d-block');
//     } else {
//         allImages[currentIndex].classList.remove('d-block');
//         allImages[currentIndex].classList.add('d-none');

//         currentIndex = 0;

//         allImages[currentIndex].classList.remove('d-none');
//         allImages[currentIndex].classList.add('d-block');
//     }
// })

// leftBtn.addEventListener('click', function () {
//     if (currentIndex > 0) {
//         allImages[currentIndex].classList.remove('d-block');
//         allImages[currentIndex].classList.add('d-none');

//         currentIndex--;
//         allImages[currentIndex].classList.remove('d-none');
//         allImages[currentIndex].classList.add('d-block');
//     } else {
//         allImages[currentIndex].classList.remove('d-block');
//         allImages[currentIndex].classList.add('d-none');

//         currentIndex = 4;

//         allImages[currentIndex].classList.remove('d-none');
//         allImages[currentIndex].classList.add('d-block');
//     }
// })

// # Bersagliamo il div con id = gallery così da riempirlo con le nostre immagini

const gallery = document.getElementById('gallery');

// # Creiamo un vettore composto dagli src delle immagini di cui vogliamo comporre il carosello

const imgVector = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

// # Realizziamo il ciclo for in modo tale da sfruttare i metodi createElement e append
// # per creare le figure e agganciarle alla gallery

for (let i = 0; i < imgVector.length; i++) {
    // $ Elemento figure
    const figureElement = document.createElement('figure');
    figureElement.classList.add('h-100', 'd-none');

    // $ Elemento img
    const imgElement = document.createElement('img');
    imgElement.src = imgVector[i];

    // $ Agganviamo prima l'img al figure e poi il figure alla gallery
    figureElement.appendChild(imgElement);
    gallery.appendChild(figureElement);

}

// # Realizziamo il Bonus 1 costruendo un carosello a scorrimento infinito

// $ Servendoci del metodo 'querySelectorAll' creiamo un vettore composto da tutti 
// $ i tag che corrispondo al quel selettore
const imgVectorHTML = document.querySelectorAll('#carousel figure');

// $ Bersagliamo i bottoni
const rightBtn = document.querySelector('.fa-chevron-right');
const leftBtn = document.querySelector('.fa-chevron-left');

// $ Contatore per scorrere il vettore
let currentIndex = 0;

// $ Settiamo l'img active
imgVectorHTML[currentIndex].classList.remove('d-none');
imgVectorHTML[currentIndex].classList.add('d-block');

// $ Modelliamo il comportamento del bottone di destra

rightBtn.addEventListener('click', function () {
    if (currentIndex < imgVector.length - 1) {
        imgVectorHTML[currentIndex].classList.remove('d-block');
        imgVectorHTML[currentIndex].classList.add('d-none');

        currentIndex++;

        imgVectorHTML[currentIndex].classList.remove('d-none');
        imgVectorHTML[currentIndex].classList.add('d-block');
    } else {
        imgVectorHTML[currentIndex].classList.remove('d-block');
        imgVectorHTML[currentIndex].classList.add('d-none');

        currentIndex = 0;
        imgVectorHTML[currentIndex].classList.remove('d-none');
        imgVectorHTML[currentIndex].classList.add('d-block');
    }
})

// $ Modelliamo il comportamento del bottone di sinistra

leftBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
        imgVectorHTML[currentIndex].classList.remove('d-block');
        imgVectorHTML[currentIndex].classList.add('d-none');

        currentIndex--;

        imgVectorHTML[currentIndex].classList.remove('d-none');
        imgVectorHTML[currentIndex].classList.add('d-block');
    } else {
        imgVectorHTML[currentIndex].classList.remove('d-block');
        imgVectorHTML[currentIndex].classList.add('d-none');

        currentIndex = imgVectorHTML.length;

        imgVectorHTML[currentIndex].classList.remove('d-none');
        imgVectorHTML[currentIndex].classList.add('d-block');
    }
})