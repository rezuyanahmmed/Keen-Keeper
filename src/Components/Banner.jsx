import { PlusCircle } from 'lucide-react';

const Banner = () => {
  return (
    <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 shadow-sm px-4">
      <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-slate-500 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>
      
      <button className="inline-flex items-center gap-2 bg-[#14532d] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#0f3e22] transition-all transform hover:-translate-y-0.5">
        <PlusCircle size={20} /> Add a Friend
      </button>

      {/* 4 Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-16">
        <div className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl text-center">
          <span className="block text-3xl font-black text-green-800">12</span>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 block">Total Friends</span>
        </div>
        <div className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl text-center">
          <span className="block text-3xl font-black text-green-800">3</span>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 block">On Track</span>
        </div>
        <div className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl text-center">
          <span className="block text-3xl font-black text-green-800">6</span>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 block">Need Attention</span>
        </div>
        <div className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl text-center">
          <span className="block text-3xl font-black text-[#14532d]">12</span>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 block">Interactions This Month</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;