import React, { useState } from "react";
// import nanoid from "nanoid"
import { createClient } from "@supabase/supabase-js";


const Entrypage = ({ onClose }) => {
  // ✅ Initialize Supabase client
const supabase = createClient(
  "https://vrsbwbsgmdsetweqxjqp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2J3YnNnbWRzZXR3ZXF4anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjcxODIsImV4cCI6MjA2Njc0MzE4Mn0.VrrxvSzcp-2IEbkZLgMkMnwlOIIQfRFsDsM9KsNnkFY"
);
  const [originalUrl, setOriginalUrl] = useState("");
  const handlsubmit = async (e) => {
    e.preventDefault();
    // const shortCode = nanoid(6);
    const { error } = await supabase
      .from("urls")
      .insert({
        user_id: user.id,
        original_url: originalUrl,
        short_url: shortUrl,
      });
    if (error) {
      toast.error("Failed to create URL");
      console.error(error);
    } else {
      toast.success("Short URL created!");
      setOriginalUrl("");
      refreshData(); // trigger re-fetch from Supabase
      onClose(); // close popup
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          >
            ✖
          </button>
          <h2 className="text-xl font-semibold mb-4">Create New URL</h2>
          <form onSubmit={handlsubmit} className="space-y-4">
            <input
              type="text"
              placeholder="original url"
              required
              className="w-full border px-4 py-2 rounded"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            ></input>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >Create URL</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Entrypage;
