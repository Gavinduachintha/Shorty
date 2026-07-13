import { Desktop, Phone4 } from "reicon-react";

export default function SessionsCard() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h2 className="text-lg font-semibold text-zinc-100">
        Active Sessions
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between rounded-lg border border-zinc-800 p-4">
          <div className="flex items-center gap-3">
            <Desktop size={18} />
            <div>
              <p className="text-sm text-zinc-100">
                Chrome • Windows
              </p>
              <p className="text-xs text-green-400">
                Current Device
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-zinc-800 p-4">
          <div className="flex items-center gap-3">
            <Phone4 weight="Filled" />
            <div>
              <p className="text-sm text-zinc-100">
                Safari • iPhone
              </p>
              <p className="text-xs text-zinc-400">
                2 days ago
              </p>
            </div>
          </div>

          <button className="text-sm text-red-400">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}