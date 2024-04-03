import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Vcard from "./Vcard";


const Home = () => {
  return (
    <>
      <div className="main">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="helpcenter w-full flex justify-center h-[30px]  mt-1 ">
          <h3 className="w-[80%] text-sm flex items-center text-blue-900 font-semibold">
            Help Center
          </h3>
        </div>
        <div className="hcwh w-full flex justify-center">
          <div>
            <div className=" text-4xl font-serif flex w-full justify-center">
              How Can We Help ?
            </div>
            <div>
              {" "}
              <input
                type="text"
                placeholder=" search by keyword"
                className="border-2 px-3 py-2 w-[500px] border-gray-400 rounded-xl mt-5 "
              />
            </div>
          </div>
        </div>
        <div className="message w-full  flex justify-center">
          <div className="mesagebox w-[80%] flex justify-center p-4 bg-yellow-300  rounded-2xl mt-5 mb-2">
            <div className="mr-2">
              <img src="" alt="" className="w-8 h-8 mt-1" />
            </div>
            <div className="text-lg">
            Received a suspicious email, fake invoice, or message? Don't reply, open links,
             download attachments, or call phone numbers listed in them. We'll never ask for 
             your PayPal password or financial details by email, message, or over the phone.
              Forward suspicious messages to  and we'll investigate them.{" "}
              <span className=" text-blue-800 font-bold">phishing@paypal.com</span>{" "}
              and we'll investigate them.
            </div>
            <div className=" ml-10 mr-2"> X</div>
          </div>
        </div>
        <div className="cardcontainer w-full flex justify-center mt-5">
          <div className="w-[80%] flex justify-evenly px-5">
            <Card />
            
            
          </div>
        </div>
        <div className="buttongroups w-full flex justify-center mt-10">
          <div className="divcontainer w-[35%] border-2 bg-gray-400 rounded-3xl flex justify-between p-[4px]">
            <div className="px-6 py-2  bg-white text-blue-800  cursor-pointer font-bold rounded-2xl">
              Personal Help
            </div>
            <div className="px-6 py-2 hover:bg-white hover:text-blue-800 cursor-pointer font-bold rounded-2xl">
              Business Help
            </div>
            <div className="px-6 py-2 hover:bg-white hover:text-blue-800 cursor-pointer font-bold rounded-2xl">
              Technical Help
            </div>
          </div>
        </div>
        <div className="mainsect w-full flex justify-center mt-12">
          <div className="sectcontainer w-[80%] flex justify-center pb-[100px]">
            {/* left side  */}
            <div className="w-[25%] px-10 ">
              <div className="bg-blue-300 pl-8 border-l-4 border-blue-800 py-2 font-bold text-blue-900">
                Common Questions
              </div>
              <div className=" pl-8   py-2 font-bold">Disputes & Limitations</div>
              <div className=" pl-8   py-2 font-bold">PayPal Help Guides</div>
              <div className=" pl-8   py-2 font-bold">Payments & Transfers</div>
              <div className=" pl-8   py-2 font-bold">Disputes & Limitations</div>
              <div className=" pl-8   py-2 font-bold">My Account</div>
              <div className=" pl-8   py-2 font-bold">My Wallet</div>
              <div className=" pl-8   py-2 font-bold">Login & Security</div>
            </div>
            {/* center */}
            <div className="w-[40%]">
              <h1 className=" text-4xl">Common Questions</h1>
              <div className="question font-bold text-blue-700 text-xl py-3 px-1">
                How do open in case with a seller ?
              </div>
              <div className="question font-bold text-blue-700 text-xl py-3 px-1">
              I forgot my password. How do I reset it?
              </div>
              <div className="question font-bold text-blue-700 text-xl py-3 px-1">
              Why is my payment on hold or unavailable?
              </div>
              <div className="question font-bold text-blue-700 text-xl py-3 px-1">
              I want my money back. Can I cancel a payment?
              </div>
              <div className="question font-bold text-blue-700 text-xl py-3 px-1">
              Why am I receiving emails from PayPal when I don’t have an account?
              </div>
              <div className="question font-bold text-blue-700 text-xl py-3 px-1">
              How do I report an unauthorized transaction or account activity?
              </div>
              <div className="question font-bold text-blue-700 text-xl py-3 px-1">
              PayPal Help Guides
              </div>
              <div className="question font-bold text-blue-700 text-xl py-3 px-1">
              Get contextual help with your account and access your information.
              </div>
            </div>
            {/* right side  */}
            <div className="w-[20%]">
              <div className="bg-blue-100 w-[90%] h-[200px] rounded-md flex flex-col items-center p-4 gap-5">
                <p className=" text-center">
                  Get customized help with your account and access your message center.
                </p>
                <button className=" border-2 border-blue-800 bg-white text-blue-800 px-6 py-1 rounded-2xl">
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mrwhelp w-full flex justify-center">
          <div className="varadcontainer w-[70%]">
            <h1 className="w-full flex justify-center text-3xl border-2 mb-5">
              More Ways To Help
            </h1>
            <div className="flex w-full justify-around">
              <Vcard />
              
            </div>
          </div>
        </div>

        {/* how are we doing */}
        <div className="hawd w-full flex justify-center">
          <div className="flex w-[65%] px-16 bg-blue-100 justify-between items-center py-5 mb-10 rounded-lg">
            <div className="text w-60%">
              <div className="q font-semibold">How are we doing ?</div>
              <div className="p font-semibold">
                Help improve the <strong>PayPal Help Center experience</strong>{" "}
                <br />
                with some quick feedback
              </div>
            </div>
            <div className="btn">
              <button className="bg-blue-900 rounded-3xl px-6 py-2 text-white font-semibold">
                Take the survey
              </button>
            </div>
          </div>
        </div>

        <div className="footer mt-24">
          <div className="logo w-full flex flex-col items-center justify-center">
            <div className="lo w-[80%]">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9NVwh1_s4dCP_gYq6opylkvA_LHCUVhpPcSN26ElbQ&s" alt="paypal" className=" w-28 h-10" />
            </div>

            <div className="uper w-[80%]  flex justify-between border-b-2 pb-2">
              <div className="left w-[50%] flex justify-evenly">
                <p className="text-blue-700 font-semibold">Help</p>
                <p className="text-blue-700 font-semibold">Contact</p>
                <p className="text-blue-700 font-semibold">Fees</p>
                <p className="text-blue-700 font-semibold">Security</p>
                <p className="text-blue-700 font-semibold">Apps</p>
                <p className="text-blue-700 font-semibold">Enterprise</p>
                <p className="text-blue-700 font-semibold">Partner</p>
              </div>
              <div className="right">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27dUuglFycaYGzd4iD8NWHZAKvbYCfZa1te-ALlankA&s" alt="flag" className="w-10 h-5" />
              </div>
            </div>
            <div className="lower w-[80%] flex justify-between mb-10 mt-2">
              <div className="left left w-[50%] flex justify-evenly">
                <p className="text-blue-700 font-semibold">Help</p>
                <p className="text-blue-700 font-semibold">Contact</p>
                <p className="text-blue-700 font-semibold">Fees</p>
                <p className="text-blue-700 font-semibold">Security</p>
                <p className="text-blue-700 font-semibold">Apps</p>
                <p className="text-blue-700 font-semibold">Enterprise</p>
                <p className="text-blue-700 font-semibold">Partner</p>
              </div>
              <div className="right left w-[50%] flex justify-evenly">
                <p className="text-blue-700 font-semibold">Help</p>
                <p className="text-blue-700 font-semibold">Contact</p>
                <p className="text-blue-700 font-semibold">Fees</p>
                <p className="text-blue-700 font-semibold">Security</p>
                <p className="text-blue-700 font-semibold">Apps</p>
                <p className="text-blue-700 font-semibold">Enterprise</p>
                <p className="text-blue-700 font-semibold">Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
