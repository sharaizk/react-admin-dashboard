import React from "react";
import {
  DashboardContainer,
  DashboardSection,
  ChartContainer,
  CardTitle,
  CardDetail,
} from "./Elements";
import { GoKebabHorizontal } from "react-icons/go";
import Chart from "react-apexcharts";
import {
  monthlyStats,
  monthlyStatsOptions,
  dataGraphStats,
  dataGraphOptions,
  productEarnings,
} from "_mock";
import Stat from "components/Stat";
const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardSection>
        <ChartContainer $flex={0.31}>
          <CardTitle>
            <p>Product Earnings</p>
            <GoKebabHorizontal size={20} />
          </CardTitle>
          <CardDetail>
            {productEarnings?.map((product) => {
              return <Stat stat={product.stat} key={product.id} />;
            })}
          </CardDetail>
        </ChartContainer>
        <ChartContainer $flex={0.31}>
          <CardTitle>
            <p>Product Earnings</p>
            <GoKebabHorizontal size={20} />
          </CardTitle>
          <Chart
            options={monthlyStatsOptions}
            type={"bar"}
            height="100%"
            series={monthlyStats}
          />
        </ChartContainer>
        <ChartContainer $flex={0.31}>
          <CardTitle>
            <p>Product Earnings</p>
            <GoKebabHorizontal size={20} />
          </CardTitle>
        </ChartContainer>
      </DashboardSection>
      <DashboardSection>
        <ChartContainer $flex={1}>
          <CardTitle>Data Graph Analysis</CardTitle>
          <Chart
            type="bar"
            height="100%"
            width="100%"
            series={dataGraphStats}
            options={dataGraphOptions}
          />
        </ChartContainer>
      </DashboardSection>
    </DashboardContainer>
  );
};

export default Dashboard;
