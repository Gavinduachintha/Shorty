"use client";

import { useState, useTransition } from "react";
import {
  Copy,
  ExternalLink,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
  Trash2,
} from "lucide-react";
import { Link3 } from "reicon-react";
import toast from "react-hot-toast";
import AddLinkModal, {
  type AddLinkFormData,
} from "@/components/dashboard/links/AddLinkModal";
import { createLink, deleteLink } from "@/app/action/links";

export interface LinkRow {
  id: string;
  short_code: string;
  original_url: string;
  created_at: string;
}

interface Props {
  initialLinks: LinkRow[];
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function copyLink(short_code: string) {
  navigator.clipboard.writeText(`https://shorty.sh/${short_code}`);
  toast.success(`Copied shorty.sh/${short_code}`);
}

export default function LinksTableClient({ initialLinks }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const filtered = query.trim()
    ? initialLinks.filter(
        (l) =>
          l.short_code.toLowerCase().includes(query.toLowerCase()) ||
          l.original_url.toLowerCase().includes(query.toLowerCase()),
      )
    : initialLinks;

  const stats = [
    { label: "Total links", value: initialLinks.length.toLocaleString() },
  ];

  const handleAddLink = (data: AddLinkFormData) => {
    startTransition(async () => {
      try {
        await createLink(data);
        toast.success(`Link created: shorty.sh/${data.slug || "…"}`);
      } catch (err) {
        toast.error(
          err instanceof Error ? err.message : "Failed to create link",
        );
      }
    });
  };

  const handleDelete = (id: string, short_code: string) => {
    if (!confirm(`Delete shorty.sh/${short_code}? This cannot be undone.`))
      return;
    startTransition(async () => {
      try {
        await deleteLink(id);
        toast.success(`Deleted shorty.sh/${short_code}`);
      } catch (err) {
        toast.error(
          err instanceof Error ? err.message : "Failed to delete link",
        );
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-5 pb-5 sm:px-6">
      {/* ── Header ── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#F4F4F5]">
            Links
          </h1>
          <p className="mt-1 text-sm text-[#A1A1AA]">
            Manage and track every link you&apos;ve shortened.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          disabled={isPending}
          className="inline-flex items-center justify-between gap-2 rounded-md bg-[#8B5CF6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#7C4DE8] active:bg-[#6D3FD9] disabled:opacity-50"
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

      {/* ── Stats ── */}
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

      {/* ── Search + Filter ── */}
      <div className="mt-6 flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search links..."
            className="w-full rounded-lg border border-[#2A2A2E] bg-[#131316] py-2.5 pl-9 pr-3 text-sm text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
          />
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border border-[#2A2A2E] bg-[#131316] px-3.5 py-2.5 text-sm font-medium text-[#A1A1AA] transition-colors hover:text-[#F4F4F5]">
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <div className="mt-10 flex flex-col items-center justify-center gap-3 py-16 text-center">
          <span className="text-4xl">🔗</span>
          <p className="text-sm font-medium text-[#F4F4F5]">
            {query ? "No links match your search." : "No links yet."}
          </p>
          {!query && (
            <p className="text-xs text-[#71717A]">
              Click &ldquo;Add Link&rdquo; to create your first shortened URL.
            </p>
          )}
        </div>
      )}

      {/* ── Desktop table ── */}
      {filtered.length > 0 && (
        <div className="mt-4 hidden overflow-hidden rounded-xl border border-[#2A2A2E] bg-[#131316] sm:block">
          <div className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 border-b border-[#2A2A2E] px-5 py-3 text-[11px] uppercase tracking-wide text-[#71717A]">
            <span>Link</span>
            <span>Created</span>
            <span className="sr-only">Actions</span>
          </div>

          {filtered.map((link) => (
            <div
              key={link.id}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-[#2A2A2E] px-5 py-4 last:border-b-0 transition-colors hover:bg-[#1A1A1D]"
            >
              <div className="min-w-0">
                <div className="font-mono text-sm text-[#F4F4F5]">
                  shorty.sh/
                  <span className="text-[#8B5CF6]">{link.short_code}</span>
                </div>
                <div className="mt-0.5 truncate font-mono text-xs text-[#71717A]">
                  {link.original_url}
                </div>
              </div>

              <span className="text-sm text-[#A1A1AA]">
                {formatDate(link.created_at)}
              </span>

              <div className="flex items-center gap-1">
                <button
                  aria-label="Copy link"
                  onClick={() => copyLink(link.short_code)}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-[#0D0D0D] hover:text-[#F4F4F5]"
                >
                  <Copy className="h-4 w-4" />
                </button>
                <a
                  href={link.original_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open destination"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-[#0D0D0D] hover:text-[#F4F4F5]"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button
                  aria-label="Delete link"
                  onClick={() => handleDelete(link.id, link.short_code)}
                  disabled={isPending}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-red-500/10 hover:text-red-400 disabled:opacity-40"
                >
                  <Trash2 className="h-4 w-4" />
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
      )}

      {/* ── Mobile card list ── */}
      {filtered.length > 0 && (
        <div className="mt-4 space-y-3 sm:hidden">
          {filtered.map((link) => (
            <div
              key={link.id}
              className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-4"
            >
              <div className="min-w-0">
                <div className="font-mono text-sm text-[#F4F4F5]">
                  shorty.sh/
                  <span className="text-[#8B5CF6]">{link.short_code}</span>
                </div>
                <div className="mt-0.5 truncate font-mono text-xs text-[#71717A]">
                  {link.original_url}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-[#71717A]">
                  {formatDate(link.created_at)}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    aria-label="Copy link"
                    onClick={() => copyLink(link.short_code)}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-[#0D0D0D] hover:text-[#F4F4F5]"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                  <a
                    href={link.original_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open destination"
                    className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-[#0D0D0D] hover:text-[#F4F4F5]"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    aria-label="Delete link"
                    onClick={() => handleDelete(link.id, link.short_code)}
                    disabled={isPending}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-[#71717A] transition-colors hover:bg-red-500/10 hover:text-red-400 disabled:opacity-40"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
