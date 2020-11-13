import React from "react";
import numeral from "numeral";

function StatesList({ states }) {
  return (
    <div className="stateslist">
      <table className="table m-0">
        <tbody>
          {states.map((state) => (
            <tr key={state.state}>
              <td>{state.state}</td>
              <td align="right">{numeral(state.cases).format("0,0")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StatesList;
