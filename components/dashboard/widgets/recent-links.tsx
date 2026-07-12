const recentLinks = [
  {
    title: "Summer launch",
    shortUrl: "shorty.sh/summer",
    createdAt: "2 hours ago",
  },
  {
    title: "Docs update",
    shortUrl: "shorty.sh/docs",
    createdAt: "Yesterday",
  },
  {
    title: "Campaign promo",
    shortUrl: "shorty.sh/campaign",
    createdAt: "3 days ago",
  },
];

const RecentLinks = () => {
  return (
    <section className="rounded-lg border border-white/10 bg-[#131316] p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-400">Recent Links</p>
          <p className="mt-1 text-lg font-semibold text-white">
            Latest created
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {recentLinks.map((link) => (
          <div
            key={link.shortUrl}
            className="flex items-start justify-between gap-4 rounded-md border border-white/5 bg-white/[0.02] px-4 py-3"
          >
            <div>
              <p className="font-medium text-white">{link.title}</p>
              <p className="mt-1 text-sm text-zinc-500">{link.shortUrl}</p>
            </div>
            <p className="shrink-0 text-sm text-zinc-500">{link.createdAt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentLinks;
