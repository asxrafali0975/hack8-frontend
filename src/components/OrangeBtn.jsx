import React from "react";

const OrangeBtn = ({ data }) => {
  return (
    <div id="btndiv" className="w-full mb-6 flex items-center justify-center">
      <button className="px-6 py-3 bg-gradient-to-r  from-orange-400 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 w-[60%] sm:w-auto">
        {data}
      </button>
    </div>
  );
};

export default OrangeBtn;
