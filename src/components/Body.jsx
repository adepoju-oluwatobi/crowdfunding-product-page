import React from 'react'
import Logo from "../assets/logo-mastercraft.svg";
import BookmarkIcon from '../assets/icon-bookmark.svg'
import Header from './Header';

function Body() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="bg-white shadow-xl w-[90%] p-6 mt-[-18%] rounded-xl">
        <div className="flex flex-col items-center text-center">
          <img className="w-10 relative top-[-45px] z-[0]" src={Logo} alt="" />
          <p className="font-bold text-2xl">MasterCraft Bamboo</p>
          <p className="font-bold text-2xl">Monitor Riser</p>
          <p className="text-sm p-4">
            A beutifully handcrafted monitor stand to reduce neck and eye strain
          </p>
          <div className="flex items-center gap-4">
            <p className="bg-[#3cb4ac] py-3 rounded-3xl px-6 text-white">
              Back this project
            </p>
            <img src={BookmarkIcon} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-xl w-[90%] p-6 rounded-xl text-center">
        <div className="">
          <p className="font-bold text-3xl">$89,914</p>
          <p className="opacity-[50%]">of $100,000 backed</p>
        </div>
        <hr className="w-[80px] m-auto mt-4 mb-4"></hr>
        <div className="">
          <p className="font-bold text-3xl">5,007</p>
          <p className="opacity-[50%]">Total backers</p>
        </div>
        <hr className="w-[80px] m-auto mt-4 mb-4"></hr>
        <div className="">
          <p className="font-bold text-3xl">56</p>
          <p className="opacity-[50%]">days left</p>
        </div>
        {/* Progress bar */}
        <div className="mt-6">
          <div className="relative rounded-full overflow-hidden h-4 bg-gray-300">
            <div
              className="absolute inset-0 rounded-full bg-[#3cb4ac]"
              style={{ width: "80%" }} // Adjust width based on progress
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-xl w-[90%] p-6 rounded-xl text-center">
        <div className="text-left p-2">
          <p className="font-bold text-xl mb-4">About this project</p>
          <p className="mb-4 opacity-50">
            The MasterCraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more confortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work
            helping you stay focused on the task at hand.
          </p>
          <p className="opacity-50">
            Featuring artisan craftmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>

        <div className="bg-white border border-slate-300 w-[90%] m-auto rounded-lg">
          <div className="text-left p-4">
            <p className="font-bold">Bamboo Stand</p>
            <p className="text-[#3cb4ac] font-bold mb-4">Pledge $25 or more</p>
            <p className="mb-4 opacity-50">
              You get an egronomic stand made of natural bamboo. you've helped
              us lunch our promotional campaign and you'll be added to a special
              backer member list.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <p className="font-bold text-3xl">101</p>
              <p>left</p>
            </div>
            <p className="p-4 bg-[#3cb4ac] text-white font-bold w-[150px] rounded-full">Select Reward</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body