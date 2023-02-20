"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchTerm) return;

    router.push(`/search/${searchTerm}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search for a movie you'd like to find"
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!searchTerm}
        type="submit"
        className="text-amber-300 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
