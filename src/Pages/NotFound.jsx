import React from 'react';
import { AlertTriangle, ArrowLeft, RefreshCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-red-500/20 blur-3xl rounded-full top-[-150px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-120px] left-[-80px]" />

      {/* Card */}
      <div className="relative z-10 max-w-xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-black tracking-tight bg-gradient-to-r from-red-400 to-pink-500 text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 leading-relaxed">
          The page you're looking for doesn’t exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          {/* Go Home Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Home
          </button>

          {/* Refresh Button */}
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <RefreshCcw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-500">
          Need help? Contact support or try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;