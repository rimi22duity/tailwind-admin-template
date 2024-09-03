import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { chartData } from '../utils/ChartData';
const CustomLineChart = () => {
  const data = [
    { name: 'January', sales: 33, profits: 24 },
    { name: 'February', sales: 53, profits: 40 },
    { name: 'March', sales: 85, profits: 33 },
    { name: 'April', sales: 41, profits: 66 },
    { name: 'May', sales: 44, profits: 20 },
    { name: 'June', sales: 65, profits: 100 },
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone"
          dataKey="sales"
          stroke="#900C3F"
          strokeWidth={5}
          activeDot={{ r: 8 }} />
        <Line type="monotone"
          dataKey="profits"
          stroke="#2980b9"
          strokeWidth={5} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default CustomLineChart




