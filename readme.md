

# ThreeJs + express example 

This project use 3D force directed graph which use itself 3JS and D3JS [link here](https://github.com/vasturiano/3d-force-graph)

The goal of this project is to show an example of how to use 3D force directed graph with express

## Install

`npm i `

## Launch

`nodemon index.js`

you can visit '/' and '/square', 

'/' is a 3D bubble representation 
'/square' shows a graph made only with D3JS

## Explore

`index.js` is the start of our code, then you can go to router to see routes used and datas needed, there is 3 main activities on this project : 

- Bubble :
    - ./src/views/3D.handlebars -> js is stored in the `<script>` element, the code will fetch data then create and insert 3D into the DOM through the element `<div id="graph"></div>`

- Square :
    - ./src/static/treemap.js -> the view will call this script which will fetch data and then create visual data
    - with this example it might be possible quite quickly to create a new route with this rendering (https://observablehq.com/@d3/bubble-chart)

- media - csvMediaConverter jsonMediaConverter : 
    - 2 files creating from a folder a csv or json file listing all files and subfolder with it links to make data that can be used to create visual data (/!\ every graph doesnt ask the same kind of data, this code might not fit for your needs) 
    - this folder is completely independant from the first two parts, you could delete this folder and the project would still work 


## Implémentations possibles 

Vous avez peut être remarqué que les données passées aux vues sont dans des fichiers csv ou json.. on pourrait peut être prévoir des données envoyées par une BDD ! 

Les modales sont plutôt vides, elles pourraient bénéficier d'un travail esthétique ! 

## Liens utiles : 

[https://github.com/d3/d3/wiki](https://github.com/d3/d3/wiki)

[https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)

[Un exemple simple pour démarrer](https://codepen.io/serkanyersen/pen/gOPerQ)