const topPerformingLinks = [
  {
    title: "Launch page",
    shortUrl: "shorty.sh/launch",
    clicks: 1240,
  },
  {
    title: "Pricing",
    shortUrl: "shorty.sh/pricing",
    clicks: 980,
  },
  {
    title: "Newsletter",
    shortUrl: "shorty.sh/news",
    clicks: 760,
  },
];

const TopPerformingLinks = () => {
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

      <div className="mt-4 space-y-2">
        {topPerformingLinks.map((link) => (
          <div
            key={link.shortUrl}
            className="flex items-center justify-between gap-4 rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-[#F4F4F5]">
                {link.title}
              </p>
              <p className="mt-0.5 truncate font-mono text-xs text-[#71717A]">
                {link.shortUrl}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-mono text-base font-semibold text-[#F4F4F5]">
                {link.clicks.toLocaleString()}
              </p>
              <p className="text-xs text-[#71717A]">clicks</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPerformingLinks;
