import { useState } from "react";
import imageHost from "./assets/desktop/image-host.jpg";
import logo from "./assets/desktop/logo.svg";
import spotify from "./assets/desktop/spotify.svg";
import applePodcast from "./assets/desktop/apple-podcast.svg";
import googlePodcasts from "./assets/desktop/google-podcasts.svg";
import pocketcastPodcasts from "./assets/desktop/pocket-casts.svg";
import bgPattern from "./assets/desktop/bg-pattern-dots.svg";
function App() {
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const handleEmailSubmit = () => {
    if (email.trim() === "") {
      setEmailErrorMessage("Oops! Please add your email");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailErrorMessage("Oops! Please check your email");
    }
  };
  return (
    <>
      <div className=" bg-hostLogo bg-no-repeat bg-cover bg-center h-screen overlay">
        <div className=" grid w-full max-h-full px-6 py-14 ">
          {/* Left Side */}
          <div className=" flex flex-col justify-between   ">
            <div className="mx-auto mb-16">
              <img src={logo} alt="POD" />
            </div>
            {/* content box */}
            <div className="">
              <h1 className="text-center text-xl tracking-widest  text-green-300">
                PUSBLISH YOUR PODCASTS{" "}
                <span className="text-white block mt-2 mb-7">EVERYWHERE.</span>
              </h1>
              <p className="text-center text-[16px] text-gray-300">
                Upload your audio to Pod with a single click. We’ll then
                distribute your podcast to Spotify, Apple Podcasts, Google
                Podcasts, Pocket Casts and more!
              </p>
              <div className="flex flex-col-reverse">
                {/*  Email Button  */}
                <div className="mt-10 flex flex-col space-y-3">
                  <input
                    type="text"
                    className="  text-gray-400 bg-gray-600 rounded-full focus:outline-none px-6 py-2 placeholder:font-bold"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className=" rounded-full bg-green-400 py-2"
                    onClick={handleEmailSubmit}
                  >
                    <span className="font-bold ">Request Access</span>
                  </button>
                  {emailErrorMessage && (
                    <p className="text-red-500 absolute -bottom-6 left-5 ">
                      {emailErrorMessage}
                    </p>
                  )}
                </div>
                <div className="flex justify-center mt-10 gap-x-5 ">
                  <img
                    src={spotify}
                    alt="spotify"
                    className="w-[18%] h-auto  object-cover bg-red-500"
                  />
                  <img
                    src={applePodcast}
                    alt="applePodcast"
                    className="w-[18%]  h-auto   object-cover bg-red-500"
                  />
                  <img
                    src={googlePodcasts}
                    alt="googlePodcasts"
                    className="w-[18%] h-auto    object-cover"
                  />
                  <img
                    src={pocketcastPodcasts}
                    alt="pocketcastPodcasts"
                    className="w-[18%] h-auto  object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="z-0  h-[77vh] hidden">
            {" "}
            <img
              src={imageHost}
              alt="Image Host"
              className="w-full h-full object-cover"
            />
            <img src={bgPattern} alt="" className="absolute " />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
