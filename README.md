## Project Setup Steps

* git clone https://github.com/amankumar1196/card-builder-app.git
* cd card-builder-app
* npm install
* npm start
* View output on http://localhost:3000/

## Demo URL
Live URL: https://667fff582d3c7325677b6904--delicate-licorice-dbc0ba.netlify.app/
## Folder Structure
```
card-builder-app/
├── public/
│   ├── index.html
│   └── index.css
├── src/
|   ├── assets/
|   |   ├── images/
|   |   |   ├── loader.gif
|   |   |   └── deleteIcon.svg
|   ├── containers/
|   |   ├── card/
|   |   |   ├── index.js
|   |   |   ├── index.css
|   |   |   ├── CardActions.js
|   |   |   └── CardReducer.js
│   ├── components/
|   |   ├── card/
|   |   |   ├── CardHeader.js
|   |   |   ├── CardItem.js
|   |   |   └── CardLoader.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Data Source

Used DummyJSON for mocking API

API Enpoint: 'https://dummyjson.com/posts'
