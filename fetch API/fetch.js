const API_URL_STAR_WARS = 'https://swapi.dev/api';

// Clásico con then
fetch( `${ API_URL_STAR_WARS}/people/1`)
   .then( response => response.json() )
   .then( data => console.log( data ));

// Con await
const res = await fetch( `${ API_URL_STAR_WARS}/people/1` );
const { name : luke } = await res.json();
console.log( luke );