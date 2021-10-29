import React from 'react'

export default function Card(props) {
    return (
      <div className="Card">
        <p>Capital: {props.capital}</p>
        <p>Estado: {props.estado}</p>
        <p>Pais: {props.pais}</p>
      </div>
    );
}
