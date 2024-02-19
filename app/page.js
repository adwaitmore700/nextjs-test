"use client";

import Image from "next/image";
import { getImages } from "@/app/lib/actions";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState([]);
  const [imageList, setImages] = useState([]);

  const handleSearch = useDebouncedCallback(async (term) => {
    const list = await getImages(term);
    console.log(list);
    setImages(list);
    setHistory([...history, list]);
  }, 1000);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="section-left">
          <p>Enter your prompt</p>
          <input
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
              handleSearch(e.target.value);
            }}
          ></input>
        </div>
        <div className="section-right">
          {imageList &&
            imageList.length > 0 &&
            imageList.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.url}
                  alt="Next.js Logo"
                  width={300}
                  // height={37}
                  priority
                />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
