const API_URL_STAR_WARS             = 'https://swapi.dev/api';
const STAR_WARS_ACCEPTED_RESORUCES  = [ 'people', 'planets', 'starships' , 'films' ];


const API_URL_POKEMON               = 'https://pokeapi.co/api/v2';
const POKE_API_ACCEPTED_RESORUCES   = [ 'pokemon', 'type', 'ability' ];

const createApi = (url, acceptedResources ) => {
    return new Proxy({}, {
        get: ( target, prop ) => {
            return async ( id ) => {
                // Revisa los parametros
                if( !acceptedResources.includes( prop ) ) 
                    return Promise.reject( { error: `Resource ${ prop } not accepted`});

                const resource = `${ url }/${ prop }/${ id }`;
                const res = await fetch( resource);
                if ( res.ok ) return res.json();

                // Si no va bien
                return Promise.reject({ error: `Something wrong happened with ${ resource }` });
            }
        }
    })
}

// Instancias
// API Stars Wars
const starsApi       = createApi( API_URL_STAR_WARS, STAR_WARS_ACCEPTED_RESORUCES );
const { name: luke }      = await starsApi.people( 1 );
const { name: c3po }      = await starsApi.people( 2 );
const { name: planet }    = await starsApi.planets( 3 );
const { name: starship }  = await starsApi.starships( 9 );


// Impresiones
console.log( luke );
console.log( c3po );
console.log(  planet ) ;
console.log( starship );

// API Pokemon
const pokeApi = createApi( API_URL_POKEMON, POKE_API_ACCEPTED_RESORUCES ); 
const pikachu = await pokeApi.pokemon('pikachu');

console.log( {pikachu} );