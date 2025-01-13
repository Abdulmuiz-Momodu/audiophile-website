// import React from "react";
// import Link from "next/link";

// export default function ModalMenu({
//   closeModal,
//   productImage,
//   productCategory,
//   productLinkDirection,
// }) {
//   const resetMenu = () => {
//     const menuButton = document.querySelector("button .bar1");
//     if (menuButton) {
//       menuButton.parentElement.classList.remove("change"); // Reset menu to bars
//     }
//     closeModal(); // Close the modal
//   };

//   return (
//     <div className="section flex flex-col gap-16 pt-28 w-full h-[20rem] overflow-auto">
//       <div className="section-item flex flex-col items-center pb-4 w-full bg-[#F1F1F1] border-none rounded">
//         <div className="flex flex-col items-center -mt-12">
//           <img className="h-28" src={productImage} alt="headphone-1" />
//           <img className="-mt-14" src="./icon-shadow.png" alt="icon-shadow" />
//         </div>
//         <div className="flex flex-col items-center gap-[13px]">
//           <h4 className="font-medium">{productCategory}</h4>
//           <Link
//             className="flex items-center gap-[10px]"
//             href={productLinkDirection}
//             onClick={resetMenu}
//           >
//             <p className="text-sm text-gray-500 font-medium hover:text-[#D87D4A]">
//               SHOP
//             </p>
//             <img className="h-[10px]" src="./icon-arrow.png" alt="icon-arrow" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }




'use client';
import React from "react";
import Link from "next/link";

export default function ModalMenu({ closeModal }) {
  
  const resetMenu = () => {
    const menuButton = document.querySelector("button .bar1");
    if (menuButton) {
      menuButton.parentElement.classList.remove("change");  // Reset menu to bars
    }
    closeModal();  // Close the modal
  };

  return (
    <div className="section flex flex-col gap-16 pt-28 w-full h-[20rem] overflow-auto">
      <div className="section-item flex flex-col items-center pb-4 w-full bg-[#F1F1F1] border-none rounded">
        <div className="flex flex-col items-center -mt-12">
          <img className="h-28" src="./headphone-nobg.png" alt="headphone-1" />
          <img className="-mt-14" src="./icon-shadow.png" alt="icon-shadow" />
        </div>
        <div className="flex flex-col items-center gap-[13px]">
          <h4 className="font-medium">HEADPHONES</h4>
          <Link
            className="flex items-center gap-[10px]"
            href="/headphone"
            onClick={resetMenu}
          >
            <p className="text-sm text-gray-500 font-medium hover:text-[#D87D4A]">
              SHOP
            </p>
            <img className="h-[10px]" src="./icon-arrow.png" alt="icon-arrow" />
          </Link>
        </div>
      </div>
      <div className="section-item flex flex-col items-center pb-4 w-full bg-[#F1F1F1] border-none rounded">
        <div className="flex flex-col items-center -mt-12">
          <img className="h-28" src="./speaker-nobg.png" alt="speaker-nobg" />
          <img className="-mt-14" src="./icon-shadow.png" alt="icon-shadow" />
        </div>
        <div className="flex flex-col items-center gap-[13px]">
          <h4 className="font-medium">SPEAKERS</h4>
          <Link
            className="flex items-center gap-[10px]"
            href="/speaker"
            onClick={resetMenu}
          >
            <p className="text-sm text-gray-500 font-medium hover:text-[#D87D4A]">
              SHOP
            </p>
            <img className="h-[10px]" src="./icon-arrow.png" alt="icon-arrow" />
          </Link>
        </div>
      </div>
      <div className="section-item flex flex-col items-center pb-4 w-full bg-[#F1F1F1] border-none rounded">
        <div className="flex flex-col items-center -mt-12">
          <img className="h-28" src="./earphone-nobg.png" alt="earphone-nobg" />
          <img className="-mt-14" src="./icon-shadow.png" alt="icon-shadow" />
        </div>
        <div className="flex flex-col items-center gap-[13px]">
          <h4 className="font-medium">EARPHONES</h4>
          <Link
            className="flex items-center gap-[10px]"
            href="/earphone"
            onClick={resetMenu}
          >
            <p className="text-sm text-gray-500 font-medium hover:text-[#D87D4A]">
              SHOP
            </p>
            <img className="h-[10px]" src="./icon-arrow.png" alt="icon-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
