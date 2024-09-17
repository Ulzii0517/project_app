import { LocationIcon, ServersIcon, UserIcon } from "../icons";

export const Card = () => {
  return (
    <div className="flex justify-center w-full  ">
      <div className="container max-w-[1250px] drop-shadow-lg card card-compact rounded-2xl bg-base-100 py-[24px] px-[100px] h-[200px]">
        <div className="card-body">
            <div className="flex items-center justify-between h-full">
          <div className="flex gap-3 items-center">
            {" "}
            <UserIcon />
            <div className="flex flex-col gap-1">
              <p className="text-xl font-extrabold">90+</p>
              <p>Users</p>
            </div>
          </div>
          <div className="border border-1 h-full"></div>

          <div>
          <div className="flex gap-3 items-center">
            {" "}
            <LocationIcon />
            <div className="flex flex-col ">
              <p className="text-xl font-extrabold">30+</p>
              <p>location</p>
            </div>
          </div>
          </div>
          <div className="border border-1 h-full"></div>

          <div>
          <div className="flex gap-3 items-center">
            {" "}
            <ServersIcon />
            <div className="flex flex-col ">
              <p className="text-xl font-extrabold">50+</p>
              <p>Servers</p>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
