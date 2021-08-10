import React from "react";

export default function SpaceSnippet({ name }) {
  return (
    <div class="grid grid-cols-2 h-32 border border-gray-200 my-4">
      <div class="relative">
        <img
          class="absolute top-0 left-0 w-full h-32 object-cover"
          src={`img/${name.toLowerCase()}.jpeg`}
        />
      </div>
      <p class="text-3xl font-bold text-left p-10">{name}</p>
    </div>
  );
}
