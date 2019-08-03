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

Index.getInitialProps = () => {
    const total = 500;
    const remain = 250;
    const percentage = (total - remain) * 100 / total;
    return {
        percentage
    };
    // replace stubbed data with this api call
    // fetch('https://www.holidaycheck.de/api/translations').then(result => result.json());
}
export default Index;
