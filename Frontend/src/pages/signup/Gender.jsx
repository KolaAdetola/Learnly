import React from "react";

const Gender = ({ onCheckboxChange, selectedMember }) => {
  return (
    <div className="flex flex-row gap-4 px-4 ">
      <div className="form-control">
        <label className="label cursor-pointer gap-4 items-center justify-center ">
          <span className="label-text text-[#141414] text-base font-medium leading-normal pb-2">
            Staff
          </span>
          <input
            type="radio"
            name="radio-10"
            className="radio  checked:bg-green-400 border-slate-400"
            checked={selectedMember ==='staff'}
            onChange={()=>{
                onCheckboxChange('staff')
            }}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-4 items-center justify-center">
          <span className="label-text text-[#141414] text-base font-medium leading-normal pb-2">
            Student
          </span>
          <input
            type="radio"
            name="radio-10"
            className="radio  border-2 border-slate-400 checked:bg-green-400"
            checked={selectedMember ==='student'}
            onChange={()=>{
                onCheckboxChange('student')
            }}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-4 items-center justify-center">
          <span className="label-text text-[#141414] text-base font-medium leading-normal pb-2">
            Admin
          </span>
          <input
            type="radio"
            name="radio-10"
            className="radio  checked:bg-green-400 border-slate-400"
            checked={selectedMember === 'admin'}
            onChange={()=>{
                onCheckboxChange('admin')
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default Gender;
