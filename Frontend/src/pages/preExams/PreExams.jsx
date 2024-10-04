import React from "react";

const PreExams = () => {
  return (
    <div>
      <div className="layout-container flex h-full grow flex-col bg-white pb-8">
        <div className="flex flex-row justify-center gap-4 items-center px-5 py-8">
          <div className="w-[50%]  p-5 border border-4 gap-3 border-[#9436ff] rounded-2xl ">
            <h1 className="text-[25px] font-semibold text-gray-800 text-center ">Introduction to mathematics</h1>
            <div className="flex items-center justify-between py-2">
              <h2 className="text-[20px] font-bold text-gray-800  text-start">Topic:</h2>
              <h2 className="text-[20px] font-semibold text-gray-800  text-start">Simultaneous linear equations</h2>
            </div>
            <div className="flex items-center justify-between gap-4 pt-5">
              <h2 className="text-xl font-bold text-gray-800 ">Duration:</h2>
              <span className="text-[18px] font-semibold text-gray-800">2 hours</span>
            </div>
            <div className="flex items-center justify-between gap-4 py-1">
               <h2 className="text-xl font-bold text-gray-800">Questions:</h2>
               <span className="text-[18px] font-semibold text-gray-800">10</span>
            </div>
            <div className="flex items-center justify-between gap-4 py-1">
               <h2 className="text-xl font-bold text-gray-800">Teacher:</h2>
               <span className="text-[18px] font-semibold text-gray-800">Dr. Adeola Ayinka</span>
            </div>
            <div className="flex items-center justify-between gap-4 py-1">
               <h2 className="text-xl font-bold text-gray-800">Date:</h2>
               <span className="text-[18px] font-semibold text-gray-800">20th September, 2023</span>
            </div>
            <div className="flex items-center justify-between gap-4 py-1">
               <h2 className="text-xl font-bold text-gray-800">Grade:</h2>
               <span className="text-[18px] font-semibold text-gray-800">Grade 11</span>
            </div>  
            <form action="">
              <div className="flex items-center justify-between ">
                <label htmlFor="" className="text-[18px] font-bold text-gray-800">Name of student:</label>
                <input type="text" name="" id="" className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md outline-none w-full max-w-xs"/>
              </div>
            </form>

          </div>
          <div className="w-[50%] h-[500px]  p-5 border border-4 border-[#9436ff] rounded-2xl ">
            <div className="flex items-center justify-between gap-4 py-5 ">
              <h2 className="text-[25px] font-bold text-gray-800">Instructions</h2>
            </div>
            <div className=" overflow-auto scroll-pb-2  h-[380px] ">
              <li className="text-[16px] font-normal text-gray-800 text-start">Write name in full e.g <span className="font-bold">Kolawole Adetola</span> &#10004; <span className="font-bold">kola ,kwolz,kolawolz</span> &#x274c;.</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">Read questions carefully and respond with the correct answer.</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">You are advised to spend 15 minutes on each question.</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">Answer within the time limit.</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">Answer all questions.</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">No looking at neighbour's work or answers.</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">Do not use any calculator.</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">Page will enter <span className="font-bold text-purple-500 hover:underline hover:text-purple-600 hover:cursor-pointer">LOCKDOWN MODE</span> for total duration of the exam minutes. </li>
              {/* <li className="text-[16px] font-normal text-gray-800 text-start">Do not share your answers with anyone.</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">Do not use any internet or phone.</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">Do not use any other devices or software.</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">Do not use any electronic devices.</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">Do not communicate with you neighbour</li>
              <li className="text-[16px] font-normal text-gray-800 text-start">Do not use any  external tablet or computer.</li> */}
            </div>
            
            
          </div>
        </div>
          <button className="btn btn-primary btn-lg bg-[#9436ff] text-white text-xl ml-[75%] mr-[1.5%]">Start Exam <span className="text-[30px] font-bold">&#8594;</span></button>
      </div>
    </div>
  );
};

export default PreExams;

        // <div className="flex h-full grow flex-col justify-between bg-gray-100 p-4">
        //   <div className="layout-content-container flex flex-col w-full flex-1">
        //     <div className="flex items-center justify-center gap-4 py-1">
        //       
        //       {/* <button className="btn btn-primary btn-sm">Start Exam</button> */}
        //     </div>
        //     
        //     
        //     
        //   </div>
        // </div>