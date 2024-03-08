export const BlogSkeleton = () => {
  return (
    <div className="w-6/12">
      <div className="w-full px-2 py-4 cursor-pointer md:w-8/12">
        <div className="flex items-center">
          <span className="rounded-full border px-3 py-1 bg-slate-300 w-10 h-9"></span>
          <span className="ml-2 w-9 h-6 bg-slate-300"></span>
          <span className="ml-1 relative bottom-0.5"></span>
          <span className="ml-1 bg-slate-300 w-20 h-6"></span>
        </div>
        <div className="mt-2 bg-slate-300 h-8"></div>
        <div className="mt-2 bg-slate-300 h-12"></div>
        <div className="mt-5 bg-slate-300 h-6"></div>

        <div className="w-full h-0 border border-gray-100 mt-5"></div>
      </div>
    </div>
  );
};
