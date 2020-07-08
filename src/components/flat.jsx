import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat, index } = this.props;
    selectFlat(index);
  }

  render() {
    const {
      selected,
      flat: {
        price, priceCurrency, name, imageUrl,
      }
    } = this.props;

    return (
      <div className={`card${selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${imageUrl}')` }}>
        <div className="card-category">
          {`${price} ${priceCurrency}`}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <button className="card-link" onClick={this.handleClick} type="button" />
      </div>
    );
  }
}

export default Flat;
