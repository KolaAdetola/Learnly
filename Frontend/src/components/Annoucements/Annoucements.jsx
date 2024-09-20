import React from "react";

const Annoucements = () => {
  return (
    <div className="px-40">
      <div class="flex items-center gap-4 bg-white px-4 py-3 justify-between hover:bg-slate-200 w-full rounded-md cursor-pointer">
        <div class="flex items-center gap-4">
          <div
            class="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
            style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/f599d09a-116b-4c1f-aead-230f0ba99782.png")',
              }}
            //   style='background-image: url("https://cdn.usegalileo.ai/sdxl10/f599d09a-116b-4c1f-aead-230f0ba99782.png");'
          ></div>
          <div class="flex flex-col justify-center">
            <p class="text-[#111517] text-base font-medium leading-normal line-clamp-1">
              Reminder: Math 101 - Class 5
            </p>
            <p class="text-[#647987] text-sm font-normal leading-normal line-clamp-2">
              May 1st
            </p>
          </div>
        </div>
        <div class="shrink-0 size-10 p-2 hover:bg-slate-300 rounded-lg">
          <div
            class="text-[#111517] flex size-7 items-center justify-center"
            data-icon="DotsThree"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annoucements;
