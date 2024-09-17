export const About = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="container grid grid-cols-2 max-w-[1250px] w-full h-[650px] items-center gap-10">
        <div className="w-[100%]">
          <img src="./Illustration2.png" alt="" />
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="text-[35px] font-medium leading-[50px]">
            We Provide Many Features You Can Use
          </p>
          <p className="text-[16px] font-normal leading-8">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-accent"
                  />
                </label>
              </div>
              <p className="flex  items-center text-[14px] font-normal leading-8">Powerfull online protection.</p>
            </div>

            <div className="flex gap-2">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-accent"
                  />
                </label>
              </div>
              <p className="flex  items-center text-[14px] font-normal leading-8">Internet without borders.</p>
            </div>

            <div className="flex gap-2">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-accent"
                  />
                </label>
              </div>
              <p className="flex  items-center text-[14px] font-normal leading-8">Supercharged VPN</p>
            </div>

            <div className="flex gap-2">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-accent"
                  />
                </label>
              </div>
              <p className="flex  items-center text-[14px] font-normal leading-8">No specific time limits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
