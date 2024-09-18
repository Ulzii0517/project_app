import { CheckIcon } from "../icons";
import { CheckPlan } from "./CheckPlan";

export const Plan = () => {
  return (
    <div className="flex justify-center w-full bg-gray-50">
      <div className="container max-w-[1250px] w-full py-[60px] box-border ">
        <div className="flex flex-col items-center gap-3">
          <div className="text-[35px] font-semibold leading-[50px]">
            Choose Your Plan
          </div>
          <div className="text-[16px] font-normal leading-[30px] text-[#4F5665]">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </div>
        </div>
        <div className="flex justify-between pt-[50px]">
          <div className="flex flex-col gap-5 items-center max-w-[330px] w-full h-[760px] border border-gray-300 bg-white rounded-lg">
            <div className="pt-[50px] w-full flex justify-center max-w-[150px] ">
              <img src="./box.png" alt="" />
            </div>
            <p className="text-[18px] font-bold leading-8 text-center">
              Free Plan
            </p>
            <div className="flex flex-col justify-center gap-5">
              <div className="flex gap-5">
                <CheckIcon />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="flex gap-5">
                <CheckIcon />
                <p>Encrypted Connection</p>
              </div>
              <div className="flex gap-5">
                <CheckIcon />
                <p>No Traffic Logs</p>
              </div>
              <div className="flex gap-5">
                <CheckIcon />
                <p>Works on All Devices</p>
              </div>
            </div>

            <p className="flex justify-end text-[25px] font-medium leading-[30px] text-center pt-32">
              Free
            </p>
            <div className=" max-w-[180px] w-full btn btn-outline btn-error rounded-[30px]">
              Select
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center max-w-[330px] w-full h-[760px] border border-gray-300 bg-white rounded-lg">
            <div className="pt-[50px] w-full flex justify-center max-w-[150px] ">
              <img src="./box.png" alt="" />
            </div>
            <p className="text-[18px] font-bold leading-8 text-center">
              Standart Plan
            </p>
            <CheckPlan />

            <p className="flex justify-end text-[25px] font-medium leading-[30px] text-center pt-[83px]">
              Free
            </p>
            <div className=" max-w-[180px] w-full btn btn-outline btn-error rounded-[30px]">
              Select
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center max-w-[330px] w-full h-[760px] border border-gray-300 bg-white rounded-lg">
            <div className="pt-[50px] w-full flex justify-center max-w-[150px] ">
              <img src="./box.png" alt="" />
            </div>
            <p className="text-[18px] font-bold leading-8 text-center">
              Premium Plan
            </p>
            <CheckPlan />
            <div className="flex gap-5">
                <CheckIcon />
                <p>Get New Features</p>
              </div>

            <p className="flex justify-end text-[25px] font-medium leading-[30px] text-center pt-[40px]">
              Free
            </p>
            <div className=" max-w-[180px] w-full btn btn-outline btn-error rounded-[30px]">
              Select
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
