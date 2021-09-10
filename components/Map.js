import ReactMapGL ,{Marker,Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import getCenter from 'geolib/es/getCenter';
import { useState } from 'react';
import { Result } from 'postcss';

function Map({searchResults}) {
    
    // const [viewport, setViewport] = useState({
    //     longitude: -122.45,
    //     latitude: 37.78,
    //     zoom: 14
    //   });

    const [location,setLocation] = useState({});
      // we have to transform all the api data form search result to getCenterred format of latitute and longitude
      // foreach cannot return value while map return value
      const cord = searchResults.map(result => ({
          longitude : result.long,
          latitude : result.lat,
      }))
      const center = getCenter(cord);
      const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 10,
      });
    
    //   console.log(viewport);
    return (
        
        <div>
            
            <ReactMapGL
            
            mapStyle="mapbox://styles/sarthakkathuria/cktadrs8y57ja17nsgpyaomxp"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >
                {searchResults.map(result => (
                    <div key={result.long}>
                        <Marker
                            longitude = {result.long}
                            latitude = {result.lat}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                           <p 
                           role ="img" onClick={()=> setLocation(result)} className="cursor-pointer text-2xl animate-bounce"
                           aria-label="push-pin">📌</p>  
                        </Marker>
                        {location.long === result.long ? (
                            <Popup
                            onClose={()=> setLocation({})}
                            closeOnClick={true}
                            latitude= {result.lat}
                            longitude={result.long} 
                            >
                                {result.title}
                            </Popup>
                        ):(false)}
                    </div>
                ))}
            </ReactMapGL>
            
            
        </div>
    )
}

export default Map
