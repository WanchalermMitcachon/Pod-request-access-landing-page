import { useState } from "react";
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
      setEmailErrorMessage("Oops! Please add your email.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailErrorMessage("Oops! Please check your email");
    }
  };
  return (
    <>
      <div
        className="desktop:py-24 desktop:pl-24 tablet:bg-none mobile:bg-no-repeat mobile:bg-cover  mobile:bg-center 
      mobile:h-screen mobile:bg-hostLogoMobile"
      >
        {/* Overlay */}
        <div
          className="mobile:absolute mobile:inset-0 mobile:bg-gradient-to-br mobile:from-black 
        mobile:to-blue-800 mobile:opacity-70 tablet:hidden "
        ></div>

        <div
          className="desktop:grid-cols-[30%_70%] tablet:grid tablet:grid-cols-[40%_60%] tablet:py-0 tablet:pr-0 mobile:w-full
         mobile:max-h-full mobile:px-6 mobile:py-14 mobile:relative mobile:z-10 "
        >
          {/* Left Side */}
          <div className="desktop:pt-0 tablet:pt-8 mobile:flex mobile:flex-col mobile:justify-between">
            <div className=" tablet:mx-0 mobile:mx-auto mobile:mb-12">
              <img src={logo} alt="POD" />
            </div>
            {/* content box */}
            <div className="desktop:w-[190%] desktop:h-[77%] desktop:pt-6  tablet:z-50 tablet:w-[220%] tablet:bg-black tablet:px-5 tablet:pt-[10%]">
              <h1 className="text-green-300 desktop:text-[210%] tablet:text-start tablet:text-[215%] tablet:tracking-widest tablet:mt-12 mobile:text-center mobile:text-xl mobile:tracking-wider">
                PUBLISH YOUR PODCASTS{" "}
                <span className="text-white block desktop:mt-8 tablet:mt-4 mobile:mt-2 mobile:mb-7">
                  EVERYWHERE.
                </span>
              </h1>
              <p className="desktop:max-w-[77%] desktop:text-[20px] tablet:text-start tablet:max-w-[77%] mobile:text-center mobile:text-[16px] text-gray-400">
                Upload your audio to Pod with a single click. We’ll then
                distribute your podcast to Spotify, Apple Podcasts, Google
                Podcasts, Pocket Casts and more!sdas
              </p>
              <div className="flex tablet:flex-col mobile:flex-col-reverse">
                {/*  Email Button  */}
                <div
                  className={`desktop:max-w-[60%] tablet:max-w-[70%]  mobile:flex mobile:mt-12  mobile:flex-col mobile:relative ${
                    emailErrorMessage ? "mobile:space-y-8" : "mobile:space-y-3"
                  }`}
                >
                  <input
                    type="text"
                    className=" text-gray-400 bg-gray-600 rounded-full focus:outline-none  
                    placeholder:font-bold desktop:px-6 tablet:relative tablet:py-3 tablet:px-3 mobile:px-6 mobile:py-2  "
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className={`tablet:absolute tablet:bottom-1 tablet:right-0 tablet:px-2 tablet:mr-1 rounded-full bg-green-400 mobile:py-2  `}
                    onClick={handleEmailSubmit}
                  >
                    <span className="font-bold ">Request Access</span>
                  </button>
                  {emailErrorMessage && (
                    <p className="text-red-500 absolute tablet:-bottom-6 mobile:bottom-12 mobile:left-5 mobile:block ">
                      {emailErrorMessage}
                    </p>
                  )}
                </div>
                <div className="flex justify-center mt-10 gap-x-5 desktop:mt-14 desktop:gap-x-0 desktop:justify-start tablet:gap-x-12">
                  <img
                    src={spotify}
                    alt="spotify"
                    className="w-[18%] h-auto object-contain desktop:mr-12 desktop:w-[15%]"
                  />
                  <img
                    src={applePodcast}
                    alt="applePodcast"
                    className="w-[18%]  h-auto object-contain  desktop:mr-12 desktop:w-[15%]"
                  />
                  <img
                    src={googlePodcasts}
                    alt="googlePodcasts"
                    className="w-[18%] h-auto object-contain desktop:mr-12 desktop:w-[15%]"
                  />
                  <img
                    src={pocketcastPodcasts}
                    alt="pocketcastPodcasts"
                    className="w-[18%] h-auto object-contain desktop:mr-12 desktop:w-[15%]"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div
            className="z-0 h-[77vh] hidden desktop:bg-hostLogoDesktop   desktop:relative  tablet:block tablet:w-auto 
          tablet:bg-hostLogoTablet mobile:bg-cover mobile:bg-no-repeat mobile:bg-center "
          >
            <img
              src={bgPattern}
              alt=""
              className="absolute desktop:right-0  desktop:bottom-[-54px]  tablet-adjust  "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
