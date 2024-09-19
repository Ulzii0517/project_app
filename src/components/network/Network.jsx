export const Network = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="container max-w-[1250px] w-full py-[80px]">
        <div className="flex flex-col items-center">
          <p className="max-w-[385px] w-full text-[35px] font-medium leading-[50px] text-center">
            Huge Global Network of Fast VPN
          </p>
          <p className="max-w-[555px] w-full text-[16px] font-normal leading-[30px] text-center">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
        </div>
        <div>
          <img src="./HugeGlobal.png" alt="" />
        </div>
        <div className="flex justify-between">
          <img className="max-w-[180px] w-full h-[80px]" src="./Netflix.png" alt="" />
          <img className="max-w-[180px] w-full h-[80px]" src="./Reddit.png" alt="" />
          <img className="max-w-[180px] w-full h-[110px]" src="./Amazon.png" alt="" />
          <img className="max-w-[180px] w-full h-[80px]" src="./Discord.png" alt="" />
          <img className="max-w-[180px] w-full h-[80px]" src="./Spotify.png" alt="" />
        </div>
      </div>
    </div>
  );
};
