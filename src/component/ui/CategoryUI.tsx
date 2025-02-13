import React from "react";
import Image from "next/image"; // Import the Next.js Image component
import line from "../../assets/line.svg";
function CategoryUI({ category }: { category: string }) {
  return (
    <div>
      <div className="flex py-2 uppercase text-s">
        {category}
        <Image className="w-6 pl-2" src={line} alt="" />
      </div>
    </div>
  );
}

export default CategoryUI;
