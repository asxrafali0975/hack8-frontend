import React from 'react';
import { Link } from 'react-router';

const IntroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#030712] to-[#05080b] text-white py-16 px-4 sm:px-8 lg:px-16 border-t-2 border-t-slate-200 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          What is <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">HACK-Ꝏ-THON</span>?
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mb-10">
         HACK-8 is an immersive hackathon where students, developers, and creators come together to build impactful solutions. Here, you will learn, collaborate, and transform your ideas into real products.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#1f2937] rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="text-cyan-400 text-2xl mb-2 font-semibold text-glow ">Learn & Grow</div>
            <p className=" text-white">Enhance your skills, explore new technologies, and grow as a developer.</p>
          </div>

          <div className="bg-[#1f2937] rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="text-purple-400 text-2xl mb-2 font-semibold text-glow-purple">Network</div>
            <p className=" text-white">Connect, collaborate, and build meaningful relationships with peers and mentors.</p>
          </div>

          <div className="bg-[#1f2937] rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="text-green-400 text-2xl mb-2 font-semibold text-glow-green">Win</div>
            <p className=" text-white">Compete for exciting prizes, exclusive swag, and recognition for your solutions.</p>
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-xl p-6 shadow-md max-w-xl">
          <h3 className="text-2xl font-bold mb-4">Who should participate?</h3>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li><span className="text-white font-medium">Students from all year</span> — sab!</li>
            <li>Developers, ui-ux designers, product thinkers</li>
            <li>Team ya solo — dono allowed.</li>
          </ul>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded transition">
            

             <Link to="/register"  className="px-3 py-2 text-white font-semibold rounded-md inline-block" >Participate</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
