---
en:
  sequence: 1
  body: >-
    <!--StartFragment-->


    Macroscope Link: <https://traces.pmcruz.com/>


    This project celebrates multi-racial families in the United States from 1860 to 2020, highlighting the gradual dissolution of systemic barriers against racial intermingling in households. Historically, homogenous communities were prevalent, with multi-racial families being rare. Census data before 1960 showed only traces of such families, as race was categorized by enumerators. Post-1970, household members reported their race, marking a shift in racial identification. 


    Key legal milestones include the 1967 Loving v. Virginia ruling, which lifted restrictions on multi-racial marriages, and the 2015 Obergefell v. Hodges decision, legalizing same-sex marriages. It wasn't until after 2000 that individuals could officially identify as multi-racial. 


    The visualization presents each multi-racial couple as a colorful chromosome, detailing the races, ages, sexes, and children of each family. Couples are organized by rarity, age, and number of children, highlighting the evolving structure of American families. Same-sex couples are included in recent years' data, along with a special notation for Latino/as. 


    The tool uses two canvas elements for visualization: one displays all families for a selected year, and the other offers a zoomed-in view based on mouse position. An efficient hashing system links mouse coordinates to family data, reducing computational load. Chromosomes are artistically rendered using p5.js with Rom-Catmull splines, and motion is simulated through Perlin noise function. Ages are represented by varying heights, using a square root scale for better visual consistency. 


    Data for this project comes from the anonymized micro-census of the IPUMS USA database, processed through MongoDB to parse households, identify multi-racial families, and structure them as hierarchical JSON objects. This innovative approach not only provides a vivid representation of America's racial diversity but also serves as a testament to the country's evolving societal norms and legal frameworks concerning race and relationships.

    <!--EndFragment-->
  externalLink: https://traces.pmcruz.com/
  references:
    - https://visap.net/2022/contributions/diversity-traces
  makers:
    - pedro/readme
  title: Diversity Traces
  image:
    lg: image1-opt-1920.webp
    med: mediumsmall1.png
    sm: mediumsmall1.png
  year: 2020
  iteration: 20

es:
  makers:
    - pedro/readme
    
zh: {}
fr: {}
pt: {}
de: {}
pl: {}
---
