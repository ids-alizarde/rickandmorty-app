import React from 'react'
import PropTypes from 'prop-types'


export const GifGridItem = ({ id, name, url }) => {

    return (
        <div className="card">
            <h1 className="center">{ id }</h1>
            <img src={ url } alt={ name } />
            <p>{ name }</p>
        </div>
    )
}

GifGridItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
