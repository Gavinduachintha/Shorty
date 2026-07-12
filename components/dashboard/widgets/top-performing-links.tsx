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
    <section className="rounded-lg border border-white/10 bg-[#131316] p-5">
      <div>
        <p className="text-sm text-zinc-400">Top Performing Links</p>
        <p className="mt-1 text-lg font-semibold text-white">Most clicked</p>
      </div>

      <div className="mt-4 space-y-3">
        {topPerformingLinks.map((link) => (
          <div
            key={link.shortUrl}
            className="flex items-center justify-between gap-4 rounded-md border border-white/5 bg-white/2 px-4 py-3"
          >
            <div>
              <p className="font-medium text-white">{link.title}</p>
              <p className="mt-1 text-sm text-zinc-500">{link.shortUrl}</p>
            </div>
            <p className="text-right text-sm text-zinc-400">
              <span className="block text-lg font-semibold text-white">
                {link.clicks}
              </span>
              clicks
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPerformingLinks;
