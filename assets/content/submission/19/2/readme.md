---
en:
  iteration: 19
  sequence: 2
  year: 2023
  title: "Spain lives in flats: why we have built our cities vertically"
  body: >
    Authors: Raúl Sánchez González, Analía Plaza


    Link to Macroscope: <https://especiales.eldiario.es/spain-lives-in-flats/>


    Abstract:  


    "Spain lives in flats" is an innovative and interactive journalistic project by elDiario.es that analyzes the footprint of more than 12 million buildings to map the height of Spanish cities in 3D to analyze their sustainability and impact on the current urban society. The investigation that includes narrative visualizations shows why Spain is one of the countries in the world that has built the highest and most dense cities compared to other countries. Two of every three Spaniards live in flats and apartments and only a third in single-family and semi-detached houses.


    We created an R script that downloaded cadastral data and footprints of more than 12 million buildings. The total size of the downloaded files exceeded 200GB.


    Then, we processed and joined in R all downloaded files to have a single database with the details of all the buildings in Spain. For example, we verified the data of 12 million buildings, we calculated the height of every building from the part that occupies the most built volume in the plans and we extracted the date of the building from the start of construction. All these processes were repeated several times during the year due to the publication of corrections and allowed us for the first time in Spain to have a database and a map with the heights of all the buildings in the country. This project compiled for the first time in a single database the cartographic plans of all the buildings currently standing in the Spanish territory and proved that in Spain we live in tall buildings.


    When considering the structure of the story, we conceived it as a journey from the small anecdote to the big phenomenon. For this reason, the piece begins by telling the story of a building in A Coruña and then explaining vertical urbanism in Spain. This story works as a historical journey through each urban model developed in Spain contextualized with graphics and details of each moment.
     
    We used R, Rstudio, QGIS and Tippecanoe for data compilation, processing and analysis. We had to do a lot of tests to compress the geographic information as much as possible to be able to map it on all devices. D3.js and Javascript were used for data visualization. Mapbox for mapping building footprint. HTML, Javascript and Scrollama for scrolling webpage.
  makers:
    - raúl-sánchez-gonzález/readme
    - analía-plaza/readme
  references:
    - -﻿
  image:
    sm: spainlivesinflats.png
    med: spainlivesinflats.png
    lg: spainlivesinflats.png
es:
  makers:
    - raúl-sánchez-gonzález/readme
    - analía-plaza/readme
zh: {}
fr: {}
pt: {}
de: {}
pl: {}
---
