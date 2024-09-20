"use client";
import { useEffect, useState } from "react";
import { CustomerCard } from "./Card";

export const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 0) {
        return users.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };

  const handleRight = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === users.length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  };
  const fetchData = async () => {
    let data = await fetch("https://randomuser.me/api/?results=20");
    let users = await data.json();
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="container max-w-[1250px] w-full py-[80px]">
        <div className="flex flex-col items-center gap-[20px]">
          <p className="text-center text-4xl max-w-[450px] w-full leading-[50px]">
            Trusted by Thousands of Happy Customer
          </p>
          <p className="text-center max-w-[555px] w-full leading-7">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 py-[50px]">
          <div className="carousel rounded-box gap-9">
            {users?.results?.map((user) => (
              <div className="carousel-item">
                <CustomerCard user={user} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
