import React from "react";

const StudentExam = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#ffffff] group/design-root overflow-x-hidden "
      style={{
        "--checkbox-tick-svg":
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(248,250,252)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')",
        "--radio-dot-svg":
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(13,124,242)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')",
        fontFamily: "Lexend, 'Noto Sans', sans-serif",
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className=" flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* <div className="flex flex-wrap gap-2 p-4">
              

            {/* Countdown Timer */}
            <div className="flex gap-4 py-2 px-4 ">
              {["01", "15", "00"].map((time, index) => (
                <div
                  key={index}
                  className="flex grow basis-0 flex-col items-stretch gap-4"
                >
                  <div className="flex h-14 grow items-center justify-center rounded-xl px-3 bg-[#e7edf4]">
                    <p className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">
                      {time}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-[#0d141c] text-sm font-normal leading-normal">
                      {["Hours", "Minutes", "Seconds"][index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Question 1 */}
            <h3 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-2">
              Question 1
            </h3>
            <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Which of the following is a vector quantity?
            </p>
            <div className="flex flex-col gap-3 p-4">
              {["Speed", "Velocity", "Distance", "Mass"].map(
                (option, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-4 rounded-xl border border-solid border-[#cedbe8] p-[15px]"
                  >
                    <input type="radio" name="radio-1" className="radio " />
                    <div className="flex grow flex-col">
                      <p className="text-[#0d141c] text-sm font-medium leading-normal">
                        {option}
                      </p>
                    </div>
                  </label>
                )
              )}
            </div>

            {/* Question 2 */}
            <div className="flex justify-between px-4 py-0">
              <div className="flex gap-2">
                <button className="btn btn-soft text-[#141414] text-sm font-medium">
                  Previous
                </button>
              </div>
              <button className="btn btn-warning text-[#141414] text-sm font-medium">
                Next &#8594;
              </button>
            </div>
          </div>
          <ul className="grid grid-cols-5 grid-rows-10 gap-4 p-4">
            <div className="size-10 border rounded-md border-[#e1e8ef] flex justify-center items-center active:bg-[#e1e8ef]">1</div>
            <div className="size-10 border rounded-md border-[#359eff] flex justify-center items-center ">1</div>
            <div className="size-10 border rounded-md border-[#359eff] flex justify-center items-center ">1</div>
            <div className="size-10 border rounded-md border-[#359eff] flex justify-center items-center ">1</div>
            <div className="size-10 border rounded-md border-[#359eff] flex justify-center items-center ">1</div>
            <div className="size-10 border rounded-md border-[#359eff] flex justify-center items-center ">1</div>
            <div className="size-10 border rounded-md border-[#359eff] flex justify-center items-center ">1</div>
            <div className="size-10 border rounded-md border-[#359eff] flex justify-center items-center ">1</div>
            <div className="size-10 border rounded-md border-[#359eff] flex justify-center items-center ">1</div>
            <div className="size-10 border rounded-md border-[#359eff] flex justify-center items-center ">1</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentExam;
