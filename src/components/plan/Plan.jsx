import { CheckIcon } from "../icons";

export const Plan = () => {
  return (
    <div className="flex justify-center w-full bg-gray-100">
      <div className="container max-w-[1250px] w-full">
        <div className="flex flex-col items-center gap-3">
          <div className="text-[35px] font-semibold leading-[50px]">
            Choose Your Plan
          </div>
          <div className="text-[16px] font-normal leading-[30px] text-[#4F5665]">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col gap-5 items-center max-w-[330px] w-full h-[760px] border border-gray-300 bg-white rounded-lg">
            <div className="pt-[50px] w-full flex justify-center max-w-[150px] ">
              <img src="./box.png" alt="" />
            </div>
            <p className="text-[18px] font-semibold leading-8 text-center">Free Plan</p>
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
            
            <p className="flex justify-end text-[25px] font-medium leading-[30px] text-center ">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
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
