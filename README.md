# Project Title

Verhalen website U-OV (Utrecht Openbaar Vervoer)

## Getting Started

Deze website van U-OV (Utrecht Openbaar Vervoer)

De website moet toegankelijk worden voor meerdere devices waarbij de gebruiker op gebruiksvriendelijke manier naar verhalen kan zoeken door bijvoorbeeld te filteren/sorteren. Alle verhalen zijn uniek vormgegeven op hun eigen manier wateen ervaring biedt voor de gebruiker.

### USER GOALS

User Goals

1. De gebruiker wil een leuk verhaal kunnen vinden.
2. De gebruiker wil aanbevolen en/of verrassende resultaten            aangeboden krijgen.
3. De gebruiker wil tijdens de reis verhalen kunnen lezen.
4. De gebruiker wil zijn input geven zodat andere gebruikers betere    en leuke verhalen kunnen lezen.

Ondersteuning van verschillende gebruikers en gebruikers contexten
Business goals.

### HTML


index.html, index2.html gelinkt aan styleSheet.css en javascript.js

..//gebruiker/login.html, ..//gebruiker/registeren.html, ..//gebruiker/wachtwoordVergeten.html gelinkt aan styleLogin.css en hebben geen javascript.js

..//verhalen/ericlucassen.html (mijn verhalen pagina), gelinkt aan styleSheetVerhalen.css en javascriptVerhaal.js

De website maakt gebruik van 5 breakpoints oftewel media queries,
@media screen and (min-width: 0em)
@media screen and (min-width: 32em)
@media screen and (min-width: 52em)
@media screen and (min-width: 70em)
@media screen and (min-width: 80em)

die ervoor zorgen dat de content er op meerdere devices goed uitziet. Onderstaand zal ik toelichting geven over belangrijke of complexe codes per pagina.


In mijn html heb ik in de body 2/3 elementen gebruik
header, main, footer In mijn index.html & login.html heb ik geen gebruik gemaakt van een footer


index.html
De header is de navigatie balk die overal het zelfde is.

de main is opgedeeld is 2 sections
1 in het eerste section zitten de filters en sorteer fucties

2 in de tweede section heb ik gebruikt voor de article in te zetten. De article zijn de verhalen op de index.html


### CSS

CSS: Homem, Login, Verhaal

De CSS van mijn home pagina heb ik los gehouden van mijn verhalen en login. Alleen het gedeelte van de header is het zelfde op elke pagina door mijn gehele website.


### JS
Ik hebmijn javascript voor mijn verhaal appart gehouden van mijn website pagina's. Dit heb ik gedaan, omdat anders de home pagina onnodige javascript laad.

In de javascript heb ik gewerkt met addeventlisseners en deze heb ik geselecteerd met getElementById & querySelectorAll & querySelector


#### Author
16 januari 2018
</br>
Marc Heemskerk
</br>
marc-heemskerk@hotmail.nl
</br>
0648860821
</br>
Project WEB
