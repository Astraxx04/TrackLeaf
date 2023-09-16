import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as d3 from "d3";

const PieChart = () => {
  const colors = [
    "#FF5733",
    "#FFCC00",
    "#33FF57",
    "#3399FF",
    "#FF33FF",
    "#FFFF33",
    "#33FFFF",
    "#9966CC",
    "#FF9900",
    "#66CC99",
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("https://trackleafbackend.onrender.com/api/v1/categoryGraph/")
      .then((res) => {
        // Assuming res.data.result is an array of objects with label and value properties
        setData(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  const width = 350;
  const height = 250;
  const radius = Math.min(width, height) / 2;

  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const pie = d3.pie().value((d) => d.value);

    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const colorScale = d3.scaleOrdinal(colors);

    const arcs = pie(data);

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Add pie slices
    g.selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (_, i) => colorScale(i));

    // Add labels
    g.selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text((d) => d.data.label);
  }, [data, colors, radius]);

  return (
    <div>
      <svg width={width} height={height} ref={svgRef}></svg>
    </div>
  );
};

export default PieChart;
