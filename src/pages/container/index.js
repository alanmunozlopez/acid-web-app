import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  state = {
    location: {}
  }

  onMarkerClick = async (mapProps, map, event) => {
    let location = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    this.setState({location});
    console.log(location);
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={3}
        style={mapStyles}
        onClick={this.onMarkerClick}
      >
        {
          this.state.location ?
          <Marker
            position={this.state.location}
          /> :
          null
        }
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC4d_SQXrjUDZAtq9F7pUuzef9SkAveBaY'
})(MapContainer);