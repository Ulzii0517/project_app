export const Header = () => {
  return (
    <div className="flex justify-center w-full pt-[20px]">
      <div className="container max-w-[1260px] w-full border border-black-500 flex justify-between h-auto ">
        <div className="flex items-center">
          <img src="/Logo.png" alt="" />
        </div>
        <div className="flex items-center gap-5">
          <div>About</div>
          <div>Features</div>
          <div>Pricing</div>
          <div>Testimonials</div>
          <div>Help</div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className=" btn btn-ghost rounded-[30px]">Sign in</div>
          <div className=" w-[150px] btn btn-outline btn-error rounded-[30px]">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};
