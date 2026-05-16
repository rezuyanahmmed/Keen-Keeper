import { useNavigate } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  // স্ট্যাটাস ভিত্তিক ব্যাকগ্রাউন্ড রঙ সেট করা
  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue': return 'bg-rose-100 text-rose-600';
      case 'almost-due': return 'bg-amber-100 text-amber-600';
      case 'on-track': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div 
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:border-slate-200 transition-all cursor-pointer flex flex-col justify-between group"
    >
      <div>
        <img 
          src={friend.picture} 
          alt={friend.name} 
          className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-slate-50 group-hover:scale-105 transition-transform"
        />
        <h3 className="font-bold text-slate-800 text-lg mt-4">{friend.name}</h3>
        <p className="text-xs text-slate-400 font-medium mt-1">{friend.days_since_contact}d ago</p>
        
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-3">
          {friend.tags.map((tag, i) => (
            <span key={i} className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Status Badge */}
      <div className="mt-5">
        <span className={`inline-block text-xs font-bold uppercase px-3 py-1 rounded-full ${getStatusColor(friend.status)}`}>
          {friend.status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;