import React from "react";
import { Doughnut } from "react-chartjs-2";

function RatioChart({ cases, recovered, height }) {
  //Calculate the ratio....
  const ratio = ((recovered / cases) * 100).toFixed(1);
  const roundedRatio = Math.round(parseInt(ratio));
  const data = {
    labels: ["Recovered", "Affected"],
    datasets: [
      {
        data: [roundedRatio, 100 - roundedRatio],
        backgroundColor: ["#008000", "#FF0000"],
        hoverBackgroundColor: ["#008000", "#FF0000"],
        borderWidth: [0, 0],
        fill: false,
        // radius: "90%",
        // innerRadius: "98%",
      },
    ],
    text: `${ratio}%`,
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.chart.width;
        var height = chart.chart.height;
        var ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 120).toFixed(1); // font size
        ctx.font = `bolder ${fontSize}rem Nunito, san-serif`; //font shorthand css
        ctx.textBaseline = "middle";
        var text = chart.chart.config.data.text; // access text from const data
        var textX = Math.round((width - ctx.measureText(text).width) / 2);
        var textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <div className="ratio-chart">
      <div className="chart">
        <Doughnut
          data={data}
          height={height}
          options={{
            animation: false,
            cutoutPercentage: 90,
            responsive: true,
            legend: {
              display: false,
            },
          }}
          plugins={plugins}
        />
      </div>
    </div>
  );
}

export default RatioChart;
