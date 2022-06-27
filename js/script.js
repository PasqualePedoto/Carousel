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


// * 1) Bersagliamo il tag che dovrà contenere le immagini
const wallpaper = document.getElementById('wall-paper');

//  * 2) Costruiamo il vettore di immagini
const imgVector = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

for (let i = 0; i < imgVector.length; i++) {
    // Creiamo un tag figure per ogni immagine e le assegnamo la classe BootStrap height 100 %
    const figure = document.createElement('figure');
    figure.classList.add('h-100');
    figure.id = `figure-${i}`;

    // Creiamo un tag img da 'appendere' al figure e le assegnamo l'src e il display none
    const img = document.createElement('img');
    img.src = imgVector[i];
    figure.appendChild(img);

    // Creiamo un tag div da 'appendere' al figure che contenga tutto ciò che implementi il carousel
    // $ FRECCETTA DI SINISTRA
    const leftArrow = document.createElement('div');
    leftArrow.id = 'left-scroll';

    const faLeftArrow = document.createElement('i');
    faLeftArrow.classList.add('fa-2x', 'fa-solid', 'fa-chevron-left');

    // $ FRECCETTA DI DESTRA
    const rightArrow = document.createElement('div');
    rightArrow.id = 'right-scroll';

    const faRightArrow = document.createElement('i');
    faRightArrow.classList.add('fa-2x', 'fa-solid', 'fa-chevron-right');

    if (i !== 0) {
        figure.classList.add('d-none');
        rightArrow.classList.add('d-none');
        leftArrow.classList.add('d-none');
        img.classList.add('d-none');
    }

    // $ APPEND DELLE FRECCETTE
    leftArrow.appendChild(faLeftArrow);
    rightArrow.appendChild(faRightArrow);

    // $ APPENDIAMO I DIV CHE MODELLANO LE FRECCETTE NEL FIGURE
    figure.appendChild(leftArrow);
    figure.appendChild(rightArrow);

    // $ Infine 'appendiamo' il figure alla classe wall - paper
    wallpaper.appendChild(figure);
}

// # MODELLIAMO LA LOGICA DEL CAROUSEL





