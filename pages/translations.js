import React from "react";
import fetch from "isomorphic-unfetch";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Index = ({ percentage, total, remain }) => (
  <div style={{width: '85vh', textAlign: 'center', margin: 'auto', color: '#666'}}>
        <h1>Removed Translations</h1>
        <CircularProgressbarWithChildren value={percentage} text={`${percentage}%`}>
          <div style={{marginTop: '130px'}}>{remain} / {total}</div>
        </CircularProgressbarWithChildren>
  </div>
);

Index.getInitialProps = () => {
    return fetch('https://www.holidaycheck.de/api/translations')
      .then(result => result.json())
      .then(response => {
        return {
          percentage: Math.round((response.total - response.remain) * 100 / response.total),
          remain: response.remain,
          total: response.total
        }
      });
}
export default Index;
