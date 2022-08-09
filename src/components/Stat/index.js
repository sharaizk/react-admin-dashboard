import React from "react";
import { StatContainer } from "./Elements";
import CircularProgress from "components/CircularProgress";
const Stat = ({ stat, totalIncome, small, main }) => {
  return (
    <StatContainer>
      <CircularProgress stat={stat}/>
    </StatContainer>
  );
};

export default Stat;
