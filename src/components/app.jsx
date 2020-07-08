import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flatsData from '../../data/flats';
import FlatList from './flatList';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flatsData[0],
      flats: flatsData,
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flatsData[index] });
  }

  render() {
    const { selectedFlat, flats } = this.state;
    const { lat, lng } = selectedFlat;

    return (
      <div>
        <FlatList
          flats={flats}
          selectedFlat={selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={{ lat, lng }} defaultZoom={12}>
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
