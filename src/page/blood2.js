import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import styled from "styled-components";

// Chart.js 등록
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// 원형 차트 컴포넌트
const GenderPieChart = () => {
  // 데이터 및 옵션 설정
  const data = {
    labels: ["A형", "B형", "AB형", "O형"],
    datasets: [
      {
        data: [2441, 2312, 1031, 1233], // 데이터
        backgroundColor: ["darkmagenta", "deeppink", "hotpink", "pink"], // 색상
        hoverOffset: 4, // 호버 시 효과
        borderWidth: 0, // 테두리 없음
      },
    ],
  };

  const options = {
    responsive: true, // 반응형 차트
    plugins: {
      legend: {
        position: "top", // 범례 위치
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            // 퍼센트를 소수점 1자리로 표시
            return (
              tooltipItem.label +
              ": " +
              tooltipItem.raw +
              "명 (" +
              tooltipItem.raw +
              "명)"
            );
          },
        },
      },
    },
  };

  return (
    <Container>
      <h2>혈액형 분포</h2>
      <Pie data={data} options={options} />
    </Container>
  );
};

export default GenderPieChart;
