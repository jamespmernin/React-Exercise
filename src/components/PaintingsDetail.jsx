import React from 'react';
import { Route } from 'react-router-dom'

function PaintingsDetail(props) {
  return (
    <div className="map">
      {
        props.paintings.map((painting, i) =>
          <Route key={i} exact path={`/${i}`} > {/* Forming the route conditionally allows for multiple route paths to be produced */}
            <div key={i} className="mappedPaintings">
              <img className="mappedPaintingData" key={i} src={painting.imgURL} alt={painting.name} /> {/* Keys are needed to avoid warnings about children that are not unique */}
              <h1 className="mappedPaintingData" key={painting._id}>{painting.name}</h1>
              <h3 className="mappedPaintingData" key={painting.price}>${painting.price}</h3>
              <small className="mappedPaintingData" key={painting.desc}>{painting.description}</small> {/* Small makes the description easier to read */}
            </div>
          </Route>
        )
      }
    </div>
  )
}

export default PaintingsDetail; 