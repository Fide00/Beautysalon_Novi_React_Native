# Beautysalon Novi

## Inhoudsopgave
*	[Versie](#versie)
*	[Auteur](#auteur)
*	[Inleiding](#inleiding)
*	[Licentie & copyright](#licentie-&-copyright)
*	[Benodigdheden en installatie](#Benodigdheden-en-installatie)
*	[NPM commando's](#npm-commands)

### Versie
*Versie 1.0*

### Auteur
Fide Alassi, studentnummer 800010530
[Hogeschool Novi](https://www.novi.nl/)

### Inleiding
In opdracht van Hogeschool Novi heb ik als HBO-ICT Software Development studente, de mobiele applicatie Beautysalon Novi 
in **React Native** programmeertaal ontwikkeld ten behoeve van de leerlijn Front End.
In de webapplicatie is een contactpagina gebouwd met de volgende functionaliteiten:
* Google Maps kaart
* Contactpagina

**Screenshot mobiele applicatie**

![Screenshot Contactpagina](https://i.ibb.co/CtpSMSH/Contactpagina-React-Native.png) 

### Licentie & copyright
© Fidaa Alassi, Hogeschool Novi

### Benodigdheden en installatie
Om de mobiele applicatie en zijn code in te zien heb je een IDE (integrated development environment) sotware pakket nodig.
Dit project is in JetBrains Webstorm ontwikkeld en is hier dus het beste compatible mee. 
De hoofdfolder genaamd SalonManagerReactNative dient in de ontwikkelprogramma geimporteerd te worden om bij de code te kunnen.

**Benodigdheden**
* JetBrains Webstorm versie 2020.2 of hoger.
* Node.js
* Android Studio om een emulator-simulator te openen of
* Android telefoon of tablet

**Installatie/Importeer project in Webstorm**
1. Open Webstorm.
2. Druk op File → Open in het menu.
3. Browse naar de projectfolder, selecteer deze en druk op de knop OK.
4. Plug jouw mobiele device in de computer of koppel de simulator aan de IDE software pakket 
(voor meer info hierover, neem contact op met de leverancier van de device).
5. Typ in de geintegreerde Terminal `npm install` en druk op enter.
6. Indien je een simulator wilt gebruiken, voer het volgende uit:
    1. Typ in de geintegreerde Terminal `react-native eject` en druk op enter.
    2. Maak het bestand 'local.properties' aan in de map 'android' die zich in de rootfolder bevindt.
    3. Zet in het local.properties bestand de volgende inhoud (let op: pas de locatie aan naar jouw SDK folder, en sla deze op:
`sdk.dir=C\:\\Users\\Fide\\AppData\\Local\\Android\\Sdk`
    4. Voeg de volgende tekst in het bestand `android\app\src\main\Androidmanifest.xml` toe in de laatste regel binnen de tag "application":
`        <meta-data
                 android:name="com.google.android.geo.API_KEY"
                 android:value="AIzaSyBiTjNq8KXagMFK154wfdEHO7sp2P_VC94"
         />`
7. Typ in de geintegreerde Terminal `npm start` en vervolgens `react-native run-android` en druk op enter. 
De mobiele applicatie wordt nu geopend.

### NPM commands
* `npm start`
* `run-android`


