import React from "react";

const Aboutpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

      <div className="max-w-3xl text-lg text-gray-700 space-y-6">
        <p>
          Welcome to <strong>[App Name]</strong> – a thoughtfully crafted web application
          built to make your <em>[note-taking / link management / productivity]</em> easier,
          faster, and more intuitive.
        </p>

        <p>
          This project is developed and maintained by <strong>Gavi</strong>, a passionate full-stack
          developer and computer science student with a strong interest in blending elegant
          design with powerful backend systems. With experience in both software and
          electronics, Gavi focuses on building applications that are not only functional
          but also enjoyable to use.
        </p>

        <p><strong>Why I built this:</strong></p>
        <p>
          As someone who constantly juggles multiple projects and ideas, I wanted a tool
          that truly worked the way I think – simple, clean, and effective.
          <strong> [App Name]</strong> was born out of that need, and it continues to grow with
          feedback and real-world use.
        </p>

        <p><strong>What drives me:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Building meaningful open-source solutions</li>
          <li>Writing clean and efficient code</li>
          <li>Prioritizing user experience</li>
          <li>Always learning and evolving</li>
        </ul>

        <p>Thanks for being a part of this journey. I hope <strong>[App Name]</strong> helps you as much as it has helped me.</p>

        <p className="text-right font-semibold">— Gavi</p>
      </div>
    </div>
  );
};

export default Aboutpage;
