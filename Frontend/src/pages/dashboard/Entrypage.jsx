import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

const supabase = createClient(
  "https://vrsbwbsgmdsetweqxjqp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2J3YnNnbWRzZXR3ZXF4anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjcxODIsImV4cCI6MjA2Njc0MzE4Mn0.VrrxvSzcp-2IEbkZLgMkMnwlOIIQfRFsDsM9KsNnkFY"
);

const Entrypage = ({ onClose, user, refreshData }) => {
  const [originalUrl, setOriginalUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const shortCode = nanoid(6);
    const shortUrl = originalUrl.split("/")[0];

    const { error } = await supabase.from("urls").insert({
      user_id: user.id,
      original_url: originalUrl,
      short_code: `${shortUrl}/${shortCode}`,
    });

    if (error) {
      toast.error("Failed to create URL");
      console.error(error);
    } else {
      toast.success("Short URL created!");
      setOriginalUrl("");
      refreshData();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0  bg-opacity-5 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4">Create New URL</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Original URL"
            required
            className="w-full border px-4 py-2 rounded"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create URL
          </button>
        </form>
      </div>
    </div>
  );
};

export default Entrypage;
