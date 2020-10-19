import React from 'react';
import { Route } from 'react-router-dom'

function PaintingsDetail(props) {
  return (
    <div className="map">
      {
        props.paintings.map((painting, i) =>
          <Route key={i} exact path={`/${i}`} >
            <div key={i} className="mappedPaintings">
              <img className="mappedData" key={i} src={painting.imgURL} alt={painting.name} />
              <h1 className="mappedData" key={painting._id}>{painting.name}</h1>
              <h3 className="mappedData" key={painting.price}>$ {painting.price}</h3>
              <small className="mappedData" key={painting.desc}>{painting.description}</small>
            </div>
          </Route>
        )
      }
    </div>
  )
}

export default PaintingsDetail; 