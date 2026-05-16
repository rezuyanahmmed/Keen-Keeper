const Footer = () => {
  return (
    <footer className="bg-[#1c352d] text-slate-300 py-12 px-6 mt-20 border-t border-emerald-950">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-black text-white tracking-tight">KeenKeeper</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Social Links</span>
          <div className="flex justify-center gap-4">
            {/* Youtube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white text-[#1c352d] rounded-full flex items-center justify-center font-bold hover:bg-slate-100 transition-colors text-xs">
              YT
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white text-[#1c352d] rounded-full flex items-center justify-center font-bold hover:bg-slate-100 transition-colors text-sm">
              f
            </a>

            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white text-[#1c352d] rounded-full flex items-center justify-center font-bold hover:bg-slate-100 transition-colors text-xs">
              X
            </a>
          </div>
        </div>

        <hr className="border-emerald-900/50 my-6" />

        <div className="flex flex-col sm:flex-row justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;