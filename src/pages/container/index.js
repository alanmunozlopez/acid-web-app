import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import InfoModal from '../components/info-modal';
import Loader from '../components/loader';

import ForecastService from '../../services';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  state = {
    location: {},
    isActiveModal: false,
    isActiveLoader: false,
    forecast: null,
    capital: null,
  }

  onMarkerClick = async (mapProps, map, event) => {
    let isActiveLoader = true;
    this.setState({isActiveLoader});
    let location = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    this.setState({location});
    console.log(location);

    let responseService = await ForecastService.get(location);
    let forecast = await responseService.details;
    let capital = await responseService.capital;

    this.setState({forecast, capital});

    let isActiveModal = (this.state.forecast);

    isActiveLoader = false;

    this.setState({isActiveModal, isActiveLoader});
    console.log(forecast);
    console.log(capital);
  }

  closeModal = () => this.setState({isActiveModal: false})

  render() {
    return (
      <div>
        {
          this.state.isActiveLoader ?
          <Loader /> :
          null
        }
        {
          this.state.isActiveModal ?
          <InfoModal
            handleCloseModal={this.closeModal}
            forecast={this.state.forecast}
            capital={this.state.capital}
          /> :
          null
        }
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
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC4d_SQXrjUDZAtq9F7pUuzef9SkAveBaY'
})(MapContainer);