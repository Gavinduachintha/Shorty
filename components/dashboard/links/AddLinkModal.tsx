"use client";

import { useEffect, useRef, useState } from "react";
// UNNECESSARY: `Tag` and `ExternalLink` are imported but only used inside the
// JSX below — that's fine, just leaving a note that if you remove the Label
// or Destination fields these icons should be cleaned up too.
import { X, Link2, Tag, ExternalLink } from "lucide-react";
interface AddLinkModalProps {
  open: boolean;
  onClose: () => void;
  onAdd?: (data: AddLinkFormData) => void;
}

export interface AddLinkFormData {
  destinationUrl: string;
  slug: string;
  label: string;
}

const EMPTY_FORM: AddLinkFormData = {
  destinationUrl: "",
  slug: "",
  label: "",
};

export default function AddLinkModal({
  open,
  onClose,
  onAdd,
}: AddLinkModalProps) {
  const [form, setForm] = useState<AddLinkFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<AddLinkFormData>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus first input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 50);
    } else {
      setForm(EMPTY_FORM);
      setErrors({});
    }
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const validate = (): boolean => {
    const next: Partial<AddLinkFormData> = {};

    if (!form.destinationUrl.trim()) {
      next.destinationUrl = "Destination URL is required.";
    } else {
      try {
        new URL(
          form.destinationUrl.startsWith("http")
            ? form.destinationUrl
            : `https://${form.destinationUrl}`,
        );
      } catch {
        next.destinationUrl = "Enter a valid URL.";
      }
    }

    if (form.slug && !/^[a-z0-9-]+$/.test(form.slug)) {
      next.slug = "Only lowercase letters, numbers, and hyphens.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onAdd?.(form);
    onClose();
  };

  const handleChange = (field: keyof AddLinkFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (!open) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-link-title"
    >
      {/* Blue-tinted backdrop */}
      <div
        className="absolute inset-0 bg-[#0a0a1a]/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-[#2A2A2E] bg-[#131316] shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
        {/* Modal header */}
        <div className="flex items-center justify-between border-b border-[#2A2A2E] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] text-[#8B5CF6]">
              <Link2 className="h-4 w-4" />
            </span>
            <h2
              id="add-link-title"
              className="text-sm font-semibold text-[#F4F4F5]"
            >
              Add new link
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#71717A] transition-colors hover:bg-[#0D0D0D] hover:text-[#F4F4F5]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-5 px-6 py-5">
            {/* Destination URL */}
            <div>
              <label
                htmlFor="destinationUrl"
                className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-[#D4D4D8]"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#71717A]" />
                Destination URL
                <span className="text-red-400" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                ref={firstInputRef}
                id="destinationUrl"
                type="url"
                value={form.destinationUrl}
                onChange={(e) => handleChange("destinationUrl", e.target.value)}
                placeholder="https://example.com/your-long-url"
                autoComplete="off"
                className={`w-full rounded-lg border bg-[#0D0D0D] px-4 py-2.5 text-sm text-[#F4F4F5] placeholder:text-[#52525B] outline-none transition-colors focus:border-[#8B5CF6] ${
                  errors.destinationUrl
                    ? "border-red-500/60"
                    : "border-[#2A2A2E]"
                }`}
              />
              {errors.destinationUrl && (
                <p className="mt-1.5 text-xs text-red-400" role="alert">
                  {errors.destinationUrl}
                </p>
              )}
            </div>

            {/* Custom slug */}
            <div>
              <label
                htmlFor="slug"
                className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-[#D4D4D8]"
              >
                <Link2 className="h-3.5 w-3.5 text-[#71717A]" />
                Custom slug
                <span className="ml-1 text-xs font-normal text-[#71717A]">
                  (optional)
                </span>
              </label>
              <div
                className={`flex items-center overflow-hidden rounded-lg border bg-[#0D0D0D] transition-colors focus-within:border-[#8B5CF6] ${
                  errors.slug ? "border-red-500/60" : "border-[#2A2A2E]"
                }`}
              >
                <span className="select-none border-r border-[#2A2A2E] px-3 py-2.5 font-mono text-xs text-[#52525B]">
                  shorty.sh/
                </span>
                <input
                  id="slug"
                  type="text"
                  value={form.slug}
                  onChange={(e) => handleChange("slug", e.target.value)}
                  placeholder="my-link"
                  autoComplete="off"
                  spellCheck={false}
                  className="flex-1 bg-transparent px-3 py-2.5 font-mono text-sm text-[#F4F4F5] placeholder:text-[#52525B] outline-none"
                />
              </div>
              {errors.slug ? (
                <p className="mt-1.5 text-xs text-red-400" role="alert">
                  {errors.slug}
                </p>
              ) : (
                <p className="mt-1.5 text-xs text-[#71717A]">
                  Leave blank to auto-generate.
                </p>
              )}
            </div>

            {/* Label */}
            <div>
              <label
                htmlFor="label"
                className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-[#D4D4D8]"
              >
                <Tag className="h-3.5 w-3.5 text-[#71717A]" />
                Label
                <span className="ml-1 text-xs font-normal text-[#71717A]">
                  (optional)
                </span>
              </label>
              <input
                id="label"
                type="text"
                value={form.label}
                onChange={(e) => handleChange("label", e.target.value)}
                placeholder="e.g. Summer campaign"
                autoComplete="off"
                className="w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-sm text-[#F4F4F5] placeholder:text-[#52525B] outline-none transition-colors focus:border-[#8B5CF6]"
              />
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-end gap-3 border-t border-[#2A2A2E] px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[#2A2A2E] px-4 py-2 text-sm font-medium text-[#A1A1AA] transition-colors hover:border-[#3F3F46] hover:text-[#F4F4F5]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-[#8B5CF6] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#7C4DE8] active:bg-[#6D3FD9]"
            >
              Create link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
