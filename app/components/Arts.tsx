import React from "react";

async function getArts() {
  const res = await fetch("http://localhost:3000/arts.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch arts");
  }

  return res.json();
}

export default async function Arts() {
  const arts = await getArts();

  return (
    <div className=" bg-[#469aa51c] backdrop-blur-sm">
      <div className="py-24 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {arts.slice(0, 3).map((art: any) => (
        <div key={art.id}>
          <img src={art.images[0]} />
          <h2 className="text-3xl font-light electrolize text-black hover:text-[#162456] leading-none select-none pt-8 pb-5">{art.title}</h2>
          <p className="text-[#0a1022] select-none w-80 roboto">{art.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
}