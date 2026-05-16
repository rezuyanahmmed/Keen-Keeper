import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { InteractionContext } from '../context/InteractionContext';
import { Phone, MessageSquare, Video, AlarmClock, Archive, Trash2, Edit2, ChevronLeft } from 'lucide-react';
import toast from 'react-hot-toast';

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addLog } = useContext(InteractionContext);
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  // JSON ফাইল থেকে নির্দিষ্ট আইডি-র বন্ধুর ডাটা খুঁজে বের করা
  useEffect(() => {
    fetch('/friends.json')
      .then((res) => res.json())
      .then((data) => {
        const foundFriend = data.find((f) => f.id === parseInt(id));
        setFriend(foundFriend);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-90 bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-800"></div>
      </div>
    );
  }

  // যদি ভুল বা ইনভ্যালিড আইডি দেওয়া হয়
  if (!friend) {
    return (
      <div className="text-center py-20 bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-700">Friend not found!</h2>
        <button onClick={() => navigate('/')} className="mt-4 bg-emerald-800 text-white px-4 py-2 rounded-lg">
          Go Back Home
        </button>
      </div>
    );
  }

  // Quick Check-In হ্যান্ডলার (রিকোয়ারমেন্ট ৬ ও ১০.৩ অনুযায়ী)
  const handleCheckIn = (type) => {
    addLog(type, friend.name);
    toast.success(`${type} entry added for ${friend.name}!`, {
      style: {
        background: '#14532d',
        color: '#fff',
      },
    });
  };

  // স্ট্যাটাস ডাইনামিক কালার সেটআপ
  const getStatusStyle = (status) => {
    switch (status) {
      case 'overdue': return 'bg-red-100 text-red-600';
      case 'almost-due': return 'bg-orange-100 text-orange-600';
      case 'on-track': return 'bg-green-100 text-green-700';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 px-4 md:px-10">
      

      {/* Main Two-Column degain*/}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

       
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white border rounded-2xl p-6 text-center shadow-sm">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-slate-100 shadow-sm"
            />
            <h2 className="text-xl font-bold text-slate-800 mt-4">{friend.name}</h2>

            
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <span className={`text-xs font-bold uppercase px-2.5 py-1 rounded-full ${getStatusStyle(friend.status)}`}>
                {friend.status}
              </span>
              {friend.tags.map((tag, idx) => (
                <span key={idx} className="bg-emerald-50 text-emerald-800 text-xs font-bold uppercase px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm italic text-slate-500 mt-4 px-2">"{friend.bio}"</p>
            <p className="text-xs text-slate-400 mt-2">Preferred: {friend.email}</p>
          </div>

          {/* Action Buttons */}
          <div className="bg-white border rounded-2xl p-4 shadow-sm space-y-2">
            <button className="w-full flex items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <AlarmClock size={16} /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <Archive size={16} /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-red-200 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border rounded-2xl p-5 text-center shadow-sm">
              <span className="block text-3xl font-bold text-slate-800">{friend.days_since_contact}</span>
              <span className="text-xs text-slate-400 font-medium">Days Since Contact</span>
            </div>
            <div className="bg-white border rounded-2xl p-5 text-center shadow-sm">
              <span className="block text-3xl font-bold text-slate-800">{friend.goal}</span>
              <span className="text-xs text-slate-400 font-medium">Goal (Days)</span>
            </div>
            <div className="bg-white border rounded-2xl p-5 text-center shadow-sm">
              <span className="block text-xl font-bold text-emerald-800 pt-1.5">{friend.next_due_date}</span>
              <span className="text-xs text-slate-400 font-medium block mt-1">Next Due</span>
            </div>
          </div>

          {/* Relationship Goal Card */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm flex justify-between items-center">
            <div>
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Relationship Goal</h4>
              <p className="text-base text-slate-700 mt-2">
                Connect every <span className="font-bold text-slate-900">{friend.goal} days</span>
              </p>
            </div>
            <button className="border border-slate-200 p-2 rounded-lg text-black hover:bg-slate-50 transition-colors">
              Edit
            </button>
          </div>

          {/* Quick Check-In Card */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Quick Check-In</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => handleCheckIn('Call')}
                className="flex flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50/50 p-5 rounded-2xl hover:bg-emerald-50/50 hover:border-emerald-200 transition-all group"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                  <Phone size={20} className="text-slate-700 group-hover:text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Call</span>
              </button>

              <button
                onClick={() => handleCheckIn('Text')}
                className="flex flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50/50 p-5 rounded-2xl hover:bg-purple-50/50 hover:border-purple-200 transition-all group"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <MessageSquare size={20} className="text-slate-700 group-hover:text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Text</span>
              </button>

              <button
                onClick={() => handleCheckIn('Video')}
                className="flex flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50/50 p-5 rounded-2xl hover:bg-green-50/50 hover:border-green-200 transition-all group"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Video size={20} className="text-slate-700 group-hover:text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;