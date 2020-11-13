import React from "react";
import { Map as LeafletMap, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../data/data";

function Map({ states }) {
  return (
    <div className="map">
      <LeafletMap center={[9.082, 8.6753]} zoom={5.8}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {states.map((state,index) => (
          <Circle
            center={[data[state.state][0].lat,data[state.state][0].lng]}
            fillColor="red"
            color={"red"}
            fillOpacity={1}
            fill={true}
            radius={Math.sqrt(state.cases) * 320}
            key={index}
          >
            <Popup>
              <div>
                <h6 className="font-weight-bold text-black">{state.state}</h6>
                <div className="state-info">
                  <p>Cases - {state.cases}</p>
                  <p>Recovered - {state.recovered}</p>
                  <p>Deaths - {state.deaths}</p>
                </div>
              </div>
            </Popup>
          </Circle>
        ))}
      </LeafletMap>
    </div>
  );
}

export default Map;
