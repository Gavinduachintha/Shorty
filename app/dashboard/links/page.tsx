"use client";

import { useState } from "react";
import {
  Copy,
  ExternalLink,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Link3 } from "reicon-react";
import toast from "react-hot-toast";
import AddLinkModal, {
  type AddLinkFormData,
} from "@/components/dashboard/links/AddLinkModal";

interface LinkRow {
  slug: string;
  destination: string;
  clicks: string;
  created: string;
  active: boolean;
}

const links: LinkRow[] = [
  {
    slug: "x7k9",
    destination: "example.com/blog/2026/how-we-scaled-our-api",
    clicks: "1,204",
    created: "Jul 8",
    active: true,
  },
  {
    slug: "launch",
    destination: "example.com/product/launch-day",
    clicks: "892",
    created: "Jul 6",
    active: true,
  },
  {
    slug: "q3-docs",
    destination: "example.com/docs/quarterly-report",
    clicks: "431",
    created: "Jul 3",
    active: true,
  },
];

const stats = [
  { label: "Total links", value: "64" },
  { label: "Total clicks", value: "12.8k" },
  { label: "Active links", value: "58" },
];

const copyLink = (slug: string) => {
  const url = `shorty.sh/${slug}`;
  navigator.clipboard.writeText(`https://${url}`);
  toast.success(`Copied ${url}`);
};

export default function LinksPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddLink = (data: AddLinkFormData) => {
    // TODO: persist to backend
    toast.success(`Link created: shorty.sh/${data.slug || "auto"}`);
  };
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-5 pb-5 sm:px-6">
      {/* header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#F4F4F5]">
            Links
          </h1>
          <p className="mt-1 text-sm text-[#A1A1AA]">
            Manage and track every link you've shortened.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center justify-between gap-2 rounded-md bg-[#8B5CF6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#7C4DE8] active:bg-[#6D3FD9]"
        >
          <span>Add Link</span>
          <Link3 className="h-5 w-5 shrink-0" />
        </button>
      </div>

      <AddLinkModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAddLink}
      />

      {/* stats */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-4"
          >
            <span className="text-xs text-[#71717A]">{s.label}</span>
            <div className="mt-1 font-mono text-2xl font-semibold text-[#F4F4F5]">
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* search + filter */}
      <div className="mt-6 flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
          <input
            type="text"
            placeholder="Search links..."
            className="w-full rounded-lg border border-[#2A2A2E] bg-[#131316] py-2.5 pl-9 pr-3 text-sm text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
          />
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border border-[#2A2A2E] bg-[#131316] px-3.5 py-2.5 text-sm font-medium text-[#A1A1AA] transition-colors hover:text-[#F4F4F5]">
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* Desktop table — hidden on mobile */}
      <div className="mt-4 hidden overflow-hidden rounded-xl border border-[#2A2A2E] bg-[#131316] sm:block">
        <div className="grid grid-cols-[1fr_auto_auto_auto_auto] items-center gap-4 border-b border-[#2A2A2E] px-5 py-3 text-[11px] uppercase tracking-wide text-[#71717A]">
          <span>Link</span>
          <span>Clicks</span>
          <span>Status</span>
          <span>Created</span>
          <span className="sr-only">Actions</span>
        </div>

        {links.map((link) => (
          <div
            key={link.slug}
            className="grid grid-cols-[1fr_auto_auto_auto_auto] items-center gap-4 border-b border-[#2A2A2E] px-5 py-4 last:border-b-0 transition-colors hover:bg-[#1A1A1D]"
          >
            <div className="min-w-0">
              <div className="font-mono text-sm text-[#F4F4F5]">
                shorty.sh/<span className="text-[#8B5CF6]">{link.slug}</span>
              </div>
              <div className="mt-0.5 truncate font-mono text-xs text-[#71717A]">
                {link.destination}
              </div>
            </div>

            <span className="text-sm text-[#A1A1AA]">{link.clicks}</span>

            <span className="inline-flex items-center gap-1.5 text-xs">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  link.active ? "bg-[#8B5CF6]" : "bg-[#3F3F46]"
                }`}
              />
              <span
                className={link.active ? "text-[#F4F4F5]" : "text-[#71717A]"}
              >
                {link.active ? "Active" : "Paused"}
              </span>
            </span>

            <span className="text-sm text-[#A1A1AA]">{link.created}</span>

            <div className="flex items-center gap-1">
              <button
                aria-label="Copy link"
                className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-[#0D0D0D] hover:text-[#F4F4F5]"
                onClick={() => copyLink(link.slug)}
              >
                <Copy className="h-4 w-4" />
              </button>
              <button
                aria-label="Open destination"
                className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-[#0D0D0D] hover:text-[#F4F4F5]"
              >
                <ExternalLink className="h-4 w-4" />
              </button>
              <button
                aria-label="More options"
                className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-[#0D0D0D] hover:text-[#F4F4F5]"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile card list — shown only below sm */}
      <div className="mt-4 space-y-3 sm:hidden">
        {links.map((link) => (
          <div
            key={link.slug}
            className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-4"
          >
            {/* slug + destination */}
            <div className="min-w-0">
              <div className="font-mono text-sm text-[#F4F4F5]">
                shorty.sh/<span className="text-[#8B5CF6]">{link.slug}</span>
              </div>
              <div className="mt-0.5 truncate font-mono text-xs text-[#71717A]">
                {link.destination}
              </div>
            </div>

            {/* meta row */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      link.active ? "bg-[#8B5CF6]" : "bg-[#3F3F46]"
                    }`}
                  />
                  <span
                    className={
                      link.active ? "text-[#F4F4F5]" : "text-[#71717A]"
                    }
                  >
                    {link.active ? "Active" : "Paused"}
                  </span>
                </span>
                <span className="text-xs text-[#71717A]">{link.created}</span>
                <span className="font-mono text-xs text-[#A1A1AA]">
                  {link.clicks} clicks
                </span>
              </div>

              {/* actions */}
              <div className="flex items-center gap-1">
                <button
                  aria-label="Copy link"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-[#0D0D0D] hover:text-[#F4F4F5]"
                  onClick={() => copyLink(link.slug)}
                >
                  <Copy className="h-4 w-4" />
                </button>
                <button
                  aria-label="Open destination"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-[#0D0D0D] hover:text-[#F4F4F5]"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
                <button
                  aria-label="More options"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-[#0D0D0D] hover:text-[#F4F4F5]"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
