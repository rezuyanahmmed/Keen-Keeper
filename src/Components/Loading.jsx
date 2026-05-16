const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#14532d] mb-4"></div>
      <p className="text-sm font-medium text-slate-500 animate-pulse">Friends profile loading...</p>
    </div>
  );
};

export default Loading;