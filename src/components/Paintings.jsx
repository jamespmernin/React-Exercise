import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Paintings(props) {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
      <div className="map">
        {props.paintings.filter(data => data.name.includes(`${search}`) && data.imgURL !== 'test').map((painting, i) => /* Checking data.imgURL not equal to test avoids an error with displaying a bad painting */
          <Link key={i} to={`/${i}`} >
            <div className="painting" key={i} className="mappedPaintings">
              <img key={i} src={painting.imgURL} alt={painting.name} />
              <h2 key={painting._id}>{painting.name}</h2>
              <h3 key={painting.price}>${painting.price}</h3>
            </div>
          </Link>
        )
        }
      </div>
    </div>
  )
}

export default Paintings;