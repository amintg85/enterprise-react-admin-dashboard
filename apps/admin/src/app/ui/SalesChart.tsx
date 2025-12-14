
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
const data = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 700 },
  { name: 'Mar', sales: 200 }
]
export default function SalesChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="sales" />
    </LineChart>
  )
}
