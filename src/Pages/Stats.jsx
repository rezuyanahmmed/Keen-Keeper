import { useContext } from 'react';
import { InteractionContext } from '../context/InteractionContext';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const Stats = () => {
  const { timeline } = useContext(InteractionContext);

  let callCount = 0;
  let textCount = 0;
  let videoCount = 0;

  timeline.forEach((item) => {
    const type = item.type?.toLowerCase();
    if (type === 'call') callCount++;
    else if (type === 'text') textCount++;
    else if (type === 'video') videoCount++;
  });

  const totalCount = callCount + textCount + videoCount;
  const hasData = totalCount > 0;

  const data = [
    { name: 'Text', value: hasData ? textCount : 1, actualValue: textCount },
    { name: 'Call', value: hasData ? callCount : 1, actualValue: callCount },
    { name: 'Video', value: hasData ? videoCount : 1, actualValue: videoCount },
  ];

  const COLORS = ['#a855f7', '#1e4d38', '#22c55e'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-800 mb-8 pl-4">
        Friendship Analytics
      </h1>

      <div className="border border-slate-200 rounded-lg p-8 relative min-h-[400px]">
        <h3 className="text-lg font-semibold text-emerald-900 mb-4">
          By Interaction Type
        </h3>

        <div className="w-full h-[300px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70} 
                outerRadius={100}
                paddingAngle={4} 
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value, name, props) => {
                  const actual = props.payload.actualValue;
                  const percentage = hasData ? ((actual / totalCount) * 100).toFixed(0) : 0;
                  return [`${actual} times (${percentage}%)`, name];
                }}
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />

              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                iconSize={8}
                formatter={(value) => {
                  const item = data.find(d => d.name === value);
                  return (
                    <span className="text-sm font-medium text-slate-500 mx-2">
                      {value} ({item ? item.actualValue : 0})
                    </span>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;