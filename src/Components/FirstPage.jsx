import { ArrowSwitch, ArrowSwitchLeft } from "../public/Svgs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Firstpage = () => {
  const [ads, setAds] = useState([
    {
      id: 1,
      pic: "../src/Pics/a.jpg",
    },
    {
      id: 2,
      pic: "../src/Pics/wol.jpg",
    },
    {
      id: 3,
      pic: "../src/Pics/a.jpg",
    },
    {
      id: 4,
      pic: "../src/Pics/wol.jpg",
    },
    {
      id: 5,
      pic: "../src/Pics/a.jpg",
    },
  ]);
  const [currentAd, setCurrentAd] = useState(0);

  return (
    <div className="w-calc(100% - 40px) mx-4 my-3">
      <Link
        to="/admin/homepics">
        <div className="w-full text-center bg-white shadow-xl rounded-xl text-black pt-1 pb-[6px] my-2">
          Change Pics
        </div>
      </Link>
      <div className="flex gap-4 flex-col md:flex-row justify-start items-center w-full">
        <div className="relative md:w-[65%] w-full md:h-[416px] h-[226px] smal:h-[276px] lil:h-[316px]">
          <button
            onClick={() => {
              if (currentAd === ads.length - 1) {
                setCurrentAd(0);
              } else {
                setCurrentAd(currentAd + 1);
              }
            }}
            className="absolute right-1 top-[50%]"
          >
            <ArrowSwitch />
          </button>
          <button
            onClick={() => {
              if (currentAd === 0) {
                setCurrentAd(ads.length - 1);
              } else {
                setCurrentAd(currentAd - 1);
              }
            }}
            className="absolute left-1 top-[50%]"
          >
            <ArrowSwitchLeft />
          </button>
          <img
            className="bg-cover duration-1000 ease-in-out w-full h-full object-fill"
            src={ads[currentAd].pic}
            alt=""
          />
        </div>
        <div className="md:w-[35%] w-full flex flex-row md:flex-col gap-4">
          <div className="w-full h-[156px] smal:h-[200px]">
            <img
              className="bg-cover h-full w-full object-fill"
              src="./src/Pics/a.jpg"
              alt=""
            />
          </div>
          <div className="w-full h-[156px] smal:h-[200px]">
            <img
              className="bg-cover w-full h-full object-fill"
              src="./src/Pics/a.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
