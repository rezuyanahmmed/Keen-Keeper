import { useContext, useState } from 'react';
import { InteractionContext } from '../context/InteractionContext';
import { Phone, MessageSquare, Video as VideoIcon } from 'lucide-react';

const Timeline = () => {
  const { timeline } = useContext(InteractionContext);
  const [filter, setFilter] = useState('All');

  // Filter er functional
  const filteredTimeline = filter === 'All'
    ? timeline
    : timeline.filter(item => item.type === filter);

  // icon  er funtional
  const getIcon = (type) => {
    switch (type) {
      case 'Call': return <Phone className="text-emerald-700" size={20} />;
      case 'Text': return <MessageSquare className="text-purple-600" size={20} />;
      case 'Video': return <VideoIcon className="text-green-500" size={20} />;
      default: return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
 
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Timeline</h1>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-slate-300 rounded-lg px-4 py-2 bg-white text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* Timeline  */}
      <div className="space-y-4">
        {filteredTimeline.length === 0 ? (
          <div className="text-center py-12 text-slate-400 bg-white border border-dashed rounded-xl">
            No interactions logged yet.
          </div>
        ) : (
          filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 border rounded-xl">
                  {getIcon(item.type)}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    {item.type} with <span className="text-slate-900">{item.name}</span>
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">{item.date}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;