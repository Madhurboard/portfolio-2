import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Character.png"
const Hero = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                  <div className="flex flex-col items-center lg:items-start">
                      <h1 className="  ml-4 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Madhur Patil</h1>
                      <span className=" ml-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</span>
                      <p className=" ml-4 my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
                  </div>
              </div>
              <div className="flex justify-center">
                <img className="ml-20 -mt-28 hidden md:block" src={profilePic} alt="Profile"></img>
              </div>
          </div>
      </div>
    );
  };
  
  export default Hero