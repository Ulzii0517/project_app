export const Intro = () => {
  return (
    <div className="flex justify-center w-full pt-[20px]">
      <div className="container grid grid-cols-2 max-w-[1250px] w-full h-[650px] items-center">
        <div className="flex flex-col gap-10">
          <p className="text-7xl leading-[100px]">
            Want anything to be easy with <b>LaslesVPN.</b>
          </p>
          <p className="text-lg leading-8">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <div className="btn btn-error w-[250px] text-white font-bold shadow-2xl shadow-red-500">
            Get Started
          </div>
        </div>
        <div className="w-[100%]">
          <img src="/Illustration1.png" alt="" />
        </div>
      </div>
    </div>
  );
};
