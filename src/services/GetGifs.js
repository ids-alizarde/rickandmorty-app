export const getGifs = async( category ) => {


    const URL_BASE_GIFS = `https://rickandmortyapi.com/api/character/?name=${encodeURI( category )}`;

    const response = await fetch( URL_BASE_GIFS );
    const data = await response.json();
    const results = data.results;

    const gifs = results.map(({ id, name, status, image, gender }) => {

        return {
            id: id,
            name: name,
            status: status,
            url: image,
            gender: gender
        }

    });

    return gifs;
}

export const getGifsId = async( id ) => {

    const URL_BASE_GIFS_ID = `https://rickandmortyapi.com/api/character/${ id }`;

    const response = await fetch( URL_BASE_GIFS_ID );
    const data = await response.json();
    const results = data.results;

    const gifs = results.map(({ id, name, status, image, gender }) => {

        return {
            id: id,
            name: name,
            status: status,
            url: image,
            gender: gender
        }

    });

    return gifs;
}