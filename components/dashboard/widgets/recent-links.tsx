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
    <section className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-5">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-[#71717A]">
          Recent Links
        </p>
        <p className="mt-1 text-base font-semibold text-[#F4F4F5]">
          Latest created
        </p>
      </div>

      <div className="mt-4 space-y-2">
        {recentLinks.map((link) => (
          <div
            key={link.shortUrl}
            className="flex items-start justify-between gap-4 rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-[#F4F4F5]">
                {link.title}
              </p>
              <p className="mt-0.5 truncate font-mono text-xs text-[#71717A]">
                {link.shortUrl}
              </p>
            </div>
            <p className="shrink-0 text-xs text-[#71717A]">{link.createdAt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentLinks;
