import React from "react";
import fetch from "isomorphic-unfetch";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Index = ({ percentage }) => (
  <div style={{width: '85vh', textAlign: 'center', margin: 'auto'}}>
        <h1>Removed Translations</h1>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
  </div>
);

Index.getInitialProps = async () => {
    const percentage = await fetch('https://www.holidaycheck.de/api/translations')
      .then(result => result.json())
      .then(response => (response.total - response.remain) * 100 / response.total)
      .then(Math.round);

    return {
      percentage
    };
}
export default Index;
