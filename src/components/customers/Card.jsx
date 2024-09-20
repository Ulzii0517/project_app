import { comments } from "./Comments.js";

export const CustomerCard = ({ user }) => {
  const { name, location, picture } = user;
  const generatedStar = Math.floor(Math.random() * 10);

  return (
    <div className="max-w-[400px] w-full h-[230px] border-2 rounded-xl p-[20px] hover:shadow-2xl hover:border-red-300">
      <div className="flex justify-between items-center">
        <div className="flex gap-[20px]">
          <img
            width={50}
            height={50}
            src={picture?.thumbnail}
            alt=""
            className="rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">
              {name?.first} {name?.last}
            </p>
            <p>
              {location?.city}, {location?.country}
            </p>
          </div>
        </div>
        <div className="font-semibold">{generatedStar} ⭐️</div>
      </div>
      <p className="font-medium mt-3 line-clamp-4 leading-7">
        {comments[Math.floor(Math.random() * comments.length)]}
      </p>
    </div>
  );
};
