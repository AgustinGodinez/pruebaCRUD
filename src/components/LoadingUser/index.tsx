
export const LoadingUser = () => {
  return (
    <section className="w-3/4 m-10 mx-auto">
      <div className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-slate-700 rounded w-3/4"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-10 bg-slate-700 rounded mt-4"></div>
        </div>
      </div>
    </section>
  );
};
