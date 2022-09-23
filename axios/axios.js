import axios from 'axios';

const API_URL_STAR_WARS = 'https://swapi.dev/api';


// Then
axios.get(`${ API_URL_STAR_WARS }/people/1`).then(resp => {
    console.log(resp.data);
});


// Async

const getAxios = async ( param, id ) => {

    const axiosConfig = {
        method: 'get',
        url: API_URL_STAR_WARS,
        params: {
            param,
            id,
        }
    }
    const character = await axios( axiosConfig);

    return character;
};

const luke = await getAxios( '/people/', 1 );
console.log( luke );