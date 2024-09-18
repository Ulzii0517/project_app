import { CheckIcon } from "../icons";

export const CheckPlan = () => {
  return (
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
        <p>Yes Traffic Logs</p>
      </div>
      <div className="flex gap-5">
        <CheckIcon />
        <p>Works on All Devices</p>
      </div>
      <div className="flex gap-5">
        <CheckIcon />
        <p>Connect Anyware</p>
      </div>
    </div>
  );
};
