import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";
import styled from "styled-components";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

// Container for the entire dashboard
const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
`;

// Container for each section (e.g. Top stats, charts, heatmap)
const SectionContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// Card styles for each box
const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 20px;
  flex: 1 1 30%; /* Makes cards fit in a row */
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #555;
  }

  p {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

// Heatmap card styling
const HeatmapCard = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// Header styling
const Header = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
`;

// Recent Activity Table Styles
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f9f9f9;
    font-weight: bold;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }
`;

const data = {
  problemsSolved: [
    { date: "2024-10-01", count: 5 },
    { date: "2024-10-02", count: 10 },
    { date: "2024-10-03", count: 7 },
    { date: "2024-10-04", count: 12 },
    { date: "2024-10-05", count: 15 },
  ],
  accuracy: [
    { subject: "Mathematics", accuracy: 85 },
    { subject: "Physics", accuracy: 78 },
    { subject: "Chemistry", accuracy: 90 },
  ],
  avgTime: [
    { subject: "Mathematics", time: 30 },
    { subject: "Physics", time: 35 },
    { subject: "Chemistry", time: 25 },
  ],
  rankProgression: [
    { date: "2024-10-01", rank: 10 },
    { date: "2024-10-02", rank: 9 },
    { date: "2024-10-03", rank: 7 },
    { date: "2024-10-04", rank: 6 },
    { date: "2024-10-05", rank: 4 },
  ],
  recentActivity: [
    {
      problem: "Math Problem 1",
      subject: "Mathematics",
      date: "2024-10-05",
      timeTaken: "5 mins",
    },
    {
      problem: "Physics Problem 1",
      subject: "Physics",
      date: "2024-10-04",
      timeTaken: "4 mins",
    },
    {
      problem: "Chemistry Problem 1",
      subject: "Chemistry",
      date: "2024-10-03",
      timeTaken: "3 mins",
    },
  ],
};

const submissionsHeatmapData = [
  { date: "2024-01-01", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-01-15", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-02-02", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-02-14", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-03-03", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-03-25", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-04-07", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-04-20", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-05-05", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-05-18", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-06-01", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-06-15", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-07-04", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-07-19", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-08-10", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-08-22", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-09-05", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-09-15", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-09-25", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-01", count: 5 },
  { date: "2024-10-02", count: 6 },
  { date: "2024-10-03", count: 8 },
  { date: "2024-10-04", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-05", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-06", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-07", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-08", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-09", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-10", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-11", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-12", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-13", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-14", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-15", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-16", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-17", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-18", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-19", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-20", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-21", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-22", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-23", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-24", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-25", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-26", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-27", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-28", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-29", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-30", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-10-31", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-11-01", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-11-15", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-12-01", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-12-15", count: Math.floor(Math.random() * 10) + 1 },
  { date: "2024-12-31", count: Math.floor(Math.random() * 10) + 1 },
];

const PerformanceDashboard = () => {
  return (
    <DashboardContainer>
      <Header>Student Performance Dashboard</Header>

      {/* Top Boxes */}
      <SectionContainer>
        <Card>
          <h3>Total Problems Solved</h3>
          <p>{data.recentActivity.length}</p>
        </Card>
        <Card>
          <h3>Average Time per Question</h3>
          <p>
            {(
              data.avgTime.reduce((acc, curr) => acc + curr.time, 0) /
              data.avgTime.length
            ).toFixed(2)}{" "}
            mins
          </p>
        </Card>
        <Card>
          <h3>Current Rank</h3>
          <p>{data.rankProgression[data.rankProgression.length - 1].rank}</p>
        </Card>
      </SectionContainer>

      {/* Heatmap */}
      <HeatmapCard>
        <h3>Submissions Heatmap</h3>
        <CalendarHeatmap
          startDate={new Date("2024-01-01")}
          endDate={new Date("2024-10-25")}
          values={submissionsHeatmapData}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${Math.min(value.count, 4)}`;
          }}
          tooltipDataAttrs={(value) => {
            return {
              "data-tip": `${value.date}: ${value.count} submissions`,
            };
          }}
        />
      </HeatmapCard>

      {/* Charts */}
      <SectionContainer>
        <Card>
          <h3>Problems Solved Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.problemsSolved}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3>Subject-wise Accuracy</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.accuracy}>
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="accuracy" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </SectionContainer>

      {/* Recent Activity */}
      <Card>
        <h3>Recent Activity</h3>
        <Table>
          <thead>
            <tr>
              <th>Problem</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Time Taken</th>
            </tr>
          </thead>
          <tbody>
            {data.recentActivity.map((activity, index) => (
              <tr key={index}>
                <td>{activity.problem}</td>
                <td>{activity.subject}</td>
                <td>{activity.date}</td>
                <td>{activity.timeTaken}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </DashboardContainer>
  );
};

export default PerformanceDashboard;
