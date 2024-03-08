import { AppBarSkeleton } from "./AppBarSkeleton";

export const BlogDetailSkeleton = () => {
  return (
    <div>
      <div className="px-9 border-b-2 border-slate-200 py-3">
        <AppBarSkeleton />
      </div>
      <div className="grid grid-cols-12 px-10 py-8">
        <div className="col-span-8 justify-self-end w-11/12">
          <div className="bg-slate-300 h-10"></div>
          <div className="mt-4 bg-slate-300 h-6"></div>
          <div className="mt-4 h-48 bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};
