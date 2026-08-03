// The `urls` table has no `clicks` column yet, so there's no way to rank links
// by performance. This widget shows a placeholder until click tracking is added.
const TopPerformingLinks = async () => {
  return (
    <section className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-5">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-[#71717A]">
          Top Performing
        </p>
        <p className="mt-1 text-base font-semibold text-[#F4F4F5]">
          Most clicked
        </p>
      </div>

      <div className="mt-4 flex flex-col items-center justify-center gap-2 py-10 text-center">
        <p className="text-sm text-[#71717A]">
          Click tracking isn&apos;t set up yet.
        </p>
        <p className="text-xs text-[#52525B]">
          Add a <code className="font-mono">clicks</code> column to the{" "}
          <code className="font-mono">urls</code> table to enable this widget.
        </p>
      </div>
    </section>
  );
};

export default TopPerformingLinks;
