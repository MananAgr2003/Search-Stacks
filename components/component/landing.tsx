"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Dropdown } from "./dropdown";
import { Newscard } from "./newscard";
import axios from "axios";

const dropdownOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export function Landing() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchResults, setSearchResults] = useState([]);
  const [inputValue , setInputValue] = useState("");

  const handleSearch = async (query) => {
    try {
      const options = {
        method: "POST",
        url: "https://api.exa.ai/search",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "x-api-key": "a50f5f9a-4f9c-42e0-baf9-bcc20c8914e0",
        },
        body: JSON.stringify({ query }),
    };

    const response = await fetch("/api/search", options);
    const data = await response.json();
    setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center py-12">
        <div className="flex mb-8">
          <Link className="flex items-center mr-8" href="#">
            <AppWindowIcon className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold">Stacks</span>
          </Link>
          <div className="flex-grow">
            <div className="flex justify-end items-center space-x-4">
              <Link className="text-sm font-medium" href="#">
                About Brand
              </Link>
              <Button size="sm" variant="navbar">
                Try our API
              </Button>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">
          Search <span className="text-[#3E75ED]">{selectedFilter}</span> by
          meaning
        </h1>
        <p className="mb-6 text-base text-center">
          Brand understands the context beyond the keywords you type.
          <Link className="text-blue-600 underline" href="#">
            Learn more
          </Link>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="navbar"
            onClick={() => setSelectedFilter("All")}
            className={selectedFilter === "All" ? "bg-black text-white" : ""}
          >
            All
          </Button>
          <Button
            variant="navbar"
            onClick={() => setSelectedFilter("Companies")}
            className={
              selectedFilter === "Companies" ? "bg-black text-white" : ""
            }
          >
            Companies
          </Button>
          <Button
            variant="navbar"
            onClick={() => setSelectedFilter("News")}
            className={selectedFilter === "News" ? "bg-black text-white" : ""}
          >
            News
          </Button>
          <Button
            variant="navbar"
            onClick={() => setSelectedFilter("PDF")}
            className={selectedFilter === "PDF" ? "bg-black text-white" : ""}
          >
            PDF
          </Button>
          <Button
            variant="navbar"
            onClick={() => setSelectedFilter("Papers")}
            className={selectedFilter === "Papers" ? "bg-black text-white" : ""}
          >
            Papers
          </Button>
          <Dropdown options={dropdownOptions} />
        </div>
        <div className="mt-6 w-full flex items-center space-x-4">
          <Input
            className="flex-grow"
            placeholder="Try a prompt or paste a link..."
            onSubmit={handleSearch}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button
            className="flex-shrink-0"
            variant="navbar"
            onClick={() => handleSearch(inputValue)}
          >
            SEARCH
          </Button>
        </div>
        <div className="flex space-x-4 items-center mt-6">
          <Button size="sm" variant="navbar">
            Any Time
          </Button>
          <Button size="sm" variant="navbar">
            Site Filter
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6">
          {searchResults.map((result) => (
            <Newscard
              key={result.id}
              title={result.title}
              url={result.url}
              date={result.publishedDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppWindowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
