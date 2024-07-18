export const LoadingTable = () => {
  return (
    <section className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
      <article className="animate-pulse">
        <header className="h-4 bg-slate-700 rounded my-2"></header>
        <div className="space-y-4">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <article key={index} className="grid grid-cols-6 gap-4">
                <span className="h-4 bg-slate-700 rounded col-span-1"></span>
                <span className="h-4 bg-slate-700 rounded col-span-1"></span>
                <span className="h-4 bg-slate-700 rounded col-span-1"></span>
                <span className="h-4 bg-slate-700 rounded col-span-1"></span>
                <span className="h-4 bg-slate-700 rounded col-span-1"></span>
                <span className="h-4 bg-slate-700 rounded col-span-1"></span>
              </article>
            ))}
        </div>
      </article>
    </section>
  );
};
