import React from 'react';
import ReactDOM from 'react-dom';
import MyMapComponent from './MyMapComponent';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Google Map API</h1>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
