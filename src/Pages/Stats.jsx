import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
  const data = [
    { name: 'Text', value: 45, color: '#8b5cf6' },
    { name: 'Call', value: 30, color: '#14532d' },
    { name: 'Video', value: 25, color: '#22c55e' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold text-slate-800 mb-10">Friendship Analytics</h1>
      <div className="bg-white p-8 rounded-2xl shadow-sm border h-[400px]">
        <h3 className="font-semibold mb-4">By Interaction Type</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={70} outerRadius={100} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => <Cell key={index} fill={entry.color} />)}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;