import React from "react";
import numeral from "numeral";
import RatioChart from "./RatioChart";

function TopStatesList({ topStates }) {
  return (
    <div className="most-affected-states">
      {topStates.map((state) => (
        <div
          className="card mb-3"
          key={state.state}
          style={{ padding: ".7rem" }}
        >
          <div className="media">
            <div style={{ width: 60, height: "inherit", paddingRight: 15 }}>
              <RatioChart
                cases={state.cases}
                recovered={state.recovered}
                height={340}
              />
            </div>
            <div className="media-body">
              <h6>
                <strong>{state.state}</strong>
              </h6>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <small>Cases - {numeral(state.cases).format("0,0")}</small>
                <small>
                  Recovered - {numeral(state.recovered).format("0,0")}
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopStatesList;
