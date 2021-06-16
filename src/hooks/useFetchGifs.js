import { useState, useEffect } from 'react';
import { getGifs } from '../services/GetGifs';  

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category )
            .then( images => {
                setState({
                    data: images,
                    loading: false
                });
            });
    }, [ category ]);

    return state;

}

export const useFetchGifsId = ( id ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( id )
            .then( images => {
                setState({
                    data: images,
                    loading: false
                });
            });
    }, [ id ]);

    return state;

}
