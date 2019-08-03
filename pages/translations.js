import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <div>
    {(props.total - props.remain) * 100 / props.total }%
  </div>
);

Index.getInitialProps = () => {
    return {
        remain: 50,
        total: 100
    };
    fetch('https://www.holidaycheck.de/api/translations')
        .then(result => result.json());
}
export default Index;
