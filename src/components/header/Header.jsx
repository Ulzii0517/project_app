export const Header = () => {
  return (
    <div className="flex justify-center w-full pt-[20px]">
      <div className="container max-w-[1260px] w-full border border-black-500 flex justify-between">
        <div>
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
          <div className="btn bg-ghost rounded-[30px]">Sign in</div>
          <div className="w-[150px] btn btn-error btn-outline rounded-[30px]">Sign Up</div>
        </div>
      </div>
    </div>
  );
};


