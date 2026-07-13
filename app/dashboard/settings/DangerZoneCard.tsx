import { AlertSquare} from "reicon-react";

export default function DangerZoneCard() {
  return (
    <div className="rounded-xl border border-red-500/20 bg-zinc-950 p-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-red-400">
        <AlertSquare weight="Filled" />
        Danger Zone
      </h2>

      <p className="mt-2 text-sm text-zinc-400">
        Permanently delete your account and all associated data.
      </p>

      <div className="mt-6 rounded-lg border border-red-500/20 p-4">
        <p className="text-sm text-zinc-300">
          This action cannot be undone.
        </p>

        <button className="mt-4 rounded-lg bg-red-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-600">
          Delete Account
        </button>
      </div>
    </div>
  );
}