
import React from "react";
import OrangeBtn from "./OrangeBtn";
import ProfileCard from "./ProfileCard";

function PhotoPage() {
  return (
    <>

      {/* Cards */}
      <div
        id="scrollpage"
        className="w-full flex flex-col items-center gap-6 px-4  bg-[#030712] border-t-2 border-t-slate-200  "
      >

        {/* <OrangeBtn data="Patrons"/> */}


      <h2 className="px-6 py-3 bg-gradient-to-r  from-orange-400 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 w-[60%] sm:w-auto mt-13 text-center">OUR DIGNITARIES</h2>
      

      


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl border-glow-red">
        <ProfileCard
            profile="directorsir.jpeg"
            name="Dr. ASHISH MALIK"
            position="Director"
          />
           <ProfileCard
            profile="hodsir.jpeg"
            name="Dr. SANTOSH KUMAR"
            position="HOD"
          />
          
        </div>



        <OrangeBtn data="Faculty Coordinator"/>

        {/* Row 3 (3 people) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          <ProfileCard
            profile="pooja.jpeg"
            name="MRS.POOJA DWIVEDI"
            position="Coordinator"
          />
          <ProfileCard
            profile="AkashSir.jpeg"
            name="MR.AKASH DUBEY"
            position="Coordinator"
          />
          
        </div>

         <OrangeBtn  data= "Organizing Committee"/>
         <div className="bg-slate-700 w-[40%] h-[2px]"> </div>

        {/* Row 4 (3 people) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          <ProfileCard
            profile="AshrafAli2.jpeg"
            name="Ashraf Ali"
            position="Tech-Head"
          />
          <ProfileCard
            profile="Kanika.jpeg"
            name="Kanika Tripathi"
            position="Coordinator"
          />
          <ProfileCard
            profile="Manas2.jpeg"
            name="Manas Sahu"
            position="Coordinator"
          />
        </div>
      </div>
    </>
  );
}

export default PhotoPage;