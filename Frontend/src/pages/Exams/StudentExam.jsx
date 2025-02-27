import React from "react";

const StudentExam = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#ffffff] group/design-root overflow-x-hidden"
      style={{
        "--checkbox-tick-svg":
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(248,250,252)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')",
        "--radio-dot-svg":
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(13,124,242)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')",
        fontFamily: "Lexend, 'Noto Sans', sans-serif",
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Breadcrumb */}
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Documents</a>
                </li>
                <li>Add Document</li>
              </ul>
            </div>
            {/* <div className="flex flex-wrap gap-2 p-4">
              <a
                className="text-[#49719c] text-base font-medium leading-normal"
                href="#"
              >
                Exams
              </a>
              <span className="text-[#49719c] text-base font-medium leading-normal">
                /
              </span>
              <span className="text-[#0d141c] text-base font-medium leading-normal">
                Physics Midterm
              </span>
            </div> */}

            {/* Exam Header */}
            {/* <div className="flex flex-wrap justify-between gap-3 p-4"> */}
            {/* <div className="flex min-w-72 flex-col gap-3"> */}
            {/* <p className="text-[#0d141c] text-4xl font-black leading-tight tracking-[-0.033em]"> */}
            {/* Physics Midterm */}
            {/* </p> */}
            {/* <p className="text-[#49719c] text-base font-normal leading-normal"> */}
            {/* Time remaining: 1 hour, 15 minutes */}
            {/* </p> */}
            {/* </div> */}
            {/* </div> */}

            {/* Countdown Timer */}
            <div className="flex gap-4 py-6 px-4 ">
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
            <h3 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
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
                    <input
                      type="radio"
                      name="question1"
                      className="h-5 w-5"
                      defaultChecked={index === 1}
                    />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentExam;
