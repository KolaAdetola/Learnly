import React from "react";

const Chat = () => {
  return (
    <>
    
      {/* <div
        className="relative flex size-full min-h-screen flex-col bg-[#f4effb] group/design-root overflow-x-hidden"
        style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="gap-1 px-6 flex flex-1 justify-center py-5 ">
            <div className="layout-content-container flex flex-col w-80 border-r-2">
              <div className="px-4 py-3 ">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div
                      className="text-[#6c2db4] flex border-none bg-[#e7daf6] items-center justify-center pl-4 rounded-l-lg border-r-0"
                      data-icon="MagnifyingGlass"
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
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                    <input
                      placeholder="Search for students"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#140821] focus:outline-0 focus:ring-0 border-none bg-[#e7daf6] focus:border-none h-full placeholder:text-[#6c2db4] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                      value=""
                    // />
                  </div>
                </label>
              </div>
              <div className="">
                <div className="">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/c564c697-ee86-49a5-8ea3-01bdcdd3275f.png");'
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#140821] text-base font-medium leading-normal line-clamp-1">
                      John
                    </p>
                    <p className="text-[#6c2db4] text-sm font-normal leading-normal line-clamp-2">
                      Just now
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-[#6c2db4] text-sm font-normal leading-normal">
                    4m ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#f4effb] px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/7b2aea82-8434-4eea-a8d2-f69e51a5738c.png");'
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#140821] text-base font-medium leading-normal line-clamp-1">
                      Sara
                    </p>
                    <p className="text-[#6c2db4] text-sm font-normal leading-normal line-clamp-2">
                      1h ago
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-[#6c2db4] text-sm font-normal leading-normal">
                    1h ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#f4effb] px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/1cbe91e3-08d6-479e-b34f-b2b003e05aab.png");'
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#140821] text-base font-medium leading-normal line-clamp-1">
                      Tim
                    </p>
                    <p className="text-[#6c2db4] text-sm font-normal leading-normal line-clamp-2">
                      2d ago
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-[#6c2db4] text-sm font-normal leading-normal">
                    2d ago
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#f4effb] px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/bb11992a-283a-4ec4-a76a-16c9f1fbe5ee.png");'
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#140821] text-base font-medium leading-normal line-clamp-1">
                      Christina
                    </p>
                    <p className="text-[#6c2db4] text-sm font-normal leading-normal line-clamp-2">
                      3d ago
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-[#6c2db4] text-sm font-normal leading-normal">
                    3d ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#f4effb] px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/1cbe91e3-08d6-479e-b34f-b2b003e05aab.png");'
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#140821] text-base font-medium leading-normal line-clamp-1">
                      Tim
                    </p>
                    <p className="text-[#6c2db4] text-sm font-normal leading-normal line-clamp-2">
                      2d ago
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-[#6c2db4] text-sm font-normal leading-normal">
                    2d ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#f4effb] px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/36c7da51-d413-41e5-97ad-a264e36dc4d2.png");'
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#140821] text-base font-medium leading-normal line-clamp-1">
                      Jesse
                    </p>
                    <p className="text-[#6c2db4] text-sm font-normal leading-normal line-clamp-2">
                      5d ago
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-[#6c2db4] text-sm font-normal leading-normal">
                    5d ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#f4effb] px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/36c7da51-d413-41e5-97ad-a264e36dc4d2.png");'
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#140821] text-base font-medium leading-normal line-clamp-1">
                      Jesse
                    </p>
                    <p className="text-[#6c2db4] text-sm font-normal leading-normal line-clamp-2">
                      5d ago
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-[#6c2db4] text-sm font-normal leading-normal">
                    5d ago
                  </p>
                </div>
              </div>
            </div>
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex items-end gap-3 p-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/6db3470b-d768-4e79-bdbb-5f17e1ac000d.png");'
                ></div>
                <div className="flex flex-1 flex-col gap-1 items-start">
                  <p className="text-[#6c2db4] text-[13px] font-normal leading-normal max-w-[360px]">
                    John
                  </p>
                  <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-lg px-4 py-3 bg-[#e7daf6] text-[#140821]">
                    Hey Helen, have you seen the announcement about the new
                    project?
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-3 p-4 justify-end">
                <div className="flex flex-1 flex-col gap-1 items-end">
                  <p className="text-[#6c2db4] text-[13px] font-normal leading-normal max-w-[360px] text-right">
                    Helen
                  </p>
                  <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-lg px-4 py-3 bg-[#9436ff] text-[#f4effb]">
                    Yes, I saw it. It's a great opportunity to practice our
                    skills.
                  </p>
                </div>
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/5813331e-857f-495c-8bb9-7fa191aeb030.png");'
                ></div>
              </div>
              <div className="flex items-end gap-3 p-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/6db3470b-d768-4e79-bdbb-5f17e1ac000d.png");'
                ></div>
                <div className="flex flex-1 flex-col gap-1 items-start">
                  <p className="text-[#6c2db4] text-[13px] font-normal leading-normal max-w-[360px]">
                    John
                  </p>
                  <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-lg px-4 py-3 bg-[#e7daf6] text-[#140821]">
                    Hey Helen, have you seen the announcement about the new
                    project?
                  </p>
                </div>
              </div>
              <div className="flex items-end gap-3 p-4 justify-end">
                <div className="flex flex-1 flex-col gap-1 items-end">
                  <p className="text-[#6c2db4] text-[13px] font-normal leading-normal max-w-[360px] text-right">
                    Helen
                  </p>
                  <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-lg px-4 py-3 bg-[#9436ff] text-[#f4effb]">
                    Yes, I saw it. It's a great opportunity to practice our
                    skills.
                  </p>
                </div>
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/5813331e-857f-495c-8bb9-7fa191aeb030.png");'
                ></div>
              </div>
              <div className="flex items-center px-4 py-3 gap-3 @container">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0"
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/24d8d5e0-18ce-4160-8d63-010295ffbfbf.png");'
                ></div>
                <label className="flex flex-col min-w-40 h-12 flex-1">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <input
                      placeholder="Type a message"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#140821] focus:outline-0 focus:ring-0 border-none bg-[#e7daf6] focus:border-none h-full placeholder:text-[#6c2db4] px-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                      value=""
                    />
                    <div className="flex border-none bg-[#e7daf6] items-center justify-center pr-4 rounded-r-lg border-l-0 !pr-2">
                      <div className="flex items-center gap-4 justify-end">
                        <div className="flex items-center gap-1">
                          <button className="flex items-center justify-center p-1.5">
                            <div
                              className="text-[#6c2db4]"
                              data-icon="Paperclip"
                              data-size="20px"
                              data-weight="regular"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20px"
                                height="20px"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                <path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"></path>
                              </svg>
                            </div>
                          </button>
                        </div>
                        <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#9436ff] text-[#f4effb] text-sm font-medium leading-normal hidden @[480px]:block">
                          <span className="truncate">Send</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Chat;
