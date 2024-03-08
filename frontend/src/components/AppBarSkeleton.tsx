export const AppBarSkeleton = () => {
  return (
    <div className="flex justify-between items-center w-full animate-pulse">
      <div className="bg-slate-300 rounded-full px-4 py-2 flex justify-end w-24 h-11"></div>

      <div className="flex items-center">
        <button className=" bg-slate-300 w-24 h-10 rounded-full px-4 py-2 "></button>

        <div>
          <span className="rounded-full border px-4 py-2 bg-slate-200 ml-4 w-10 h-10"></span>
        </div>
      </div>
    </div>
  );
};
