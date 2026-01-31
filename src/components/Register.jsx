import React, { useState, useTransition } from "react";
import axios from "axios";
import ElectricBorder from "../ReactBit/ElectricBorder";

function Register() {
  const [pending, startTransition] = useTransition();

  const [email, setEmail] = useState("");
  const [Leader_name, setLeaderName] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const [phone, setNumber] = useState("");

  const submitFunc = (e) => {
    e.preventDefault();


    let EndEmail = email.split('@')[1]
   

    if(EndEmail!="axiscolleges.in"){
      alert("Please Use Email Provided By College")
      return
    }
    if(phone.length!=10){
      alert("Enter Valid Phone Number")
      return 
    }

    // basic validation
    if (!email || !Leader_name || !member1 || !phone) {
      alert("Please fill all required fields");
      return;
    }

    

 

    const payload = {
      email,
      Leader_name: Leader_name,
      member1,
      member2: member2 || null,
      member3: member3 || null,
      phone: phone,
    };

    startTransition(() => {
      axios
        // .post("http://127.0.0.1:8000/getData", payload)
        .post("https://hack8-hackathon-backend-1.onrender.com/getData", payload)
        .then((res) => {
          if (res.data.success) {
            alert("Registration successfull");
          }
          if (res.data.error_rer) {
            alert("something went wrong");
          }
        })
        .catch((err) => {
          
          alert("Registration failed");
        });
    });
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-5 mt-3">
        <ElectricBorder
          color="black"
          speed={1}
          chaos={0.5}
          thickness={3}
          style={{ borderRadius: 2, display: "inline-block" }}
        >
          <h1 className="text-2xl text-black px-2 py-1 rounded-lg font-semibold flex items-center justify-center">
            Hack
            <div className="bg-[#26dcf5] rounded-full text-center w-7 h-7 ml-1">
              8
            </div>
          </h1>
        </ElectricBorder>

        <h1 className="font-semibold text-2xl">Registration</h1>
      </nav>

      <main>
        <form
          onSubmit={submitFunc}
          className="space-y-4 flex flex-col items-center h-[90vh] mt-5 px-3"
        >
          <h6 className="w-full pl-2 sm:w-[90%] xl:w-[30%] font-semibold">
            EMAIL ADDRESS
          </h6>
          <input
            type="email"
            placeholder="2025bcaxyz@axiscolleges.in"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl h-14 px-4 border sm:w-[90%] xl:w-[30%]"
          />

          <h6 className="w-full pl-2 sm:w-[90%] xl:w-[30%] font-semibold">
            TEAM LEADER NAME
          </h6>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setLeaderName(e.target.value)}
            className="w-full rounded-xl h-14 px-4 border sm:w-[90%] xl:w-[30%]"
          />

          <h6 className="w-full pl-2 sm:w-[90%] xl:w-[30%] font-semibold">
            TEAM MEMBERS
          </h6>
          <input
            type="text"
            placeholder="Member 1"
            onChange={(e) => setMember1(e.target.value)}
            className="w-full rounded-xl h-14 px-4 border sm:w-[90%] xl:w-[30%]"
          />
          <input
            type="text"
            placeholder="Member 2 (optional)"
            onChange={(e) => setMember2(e.target.value)}
            className="w-full rounded-xl h-14 px-4 border sm:w-[90%] xl:w-[30%]"
          />
          <input
            type="text"
            placeholder="Member 3 (optional)"
            onChange={(e) => setMember3(e.target.value)}
            className="w-full rounded-xl h-14 px-4 border sm:w-[90%] xl:w-[30%]"
          />

          <h6 className="w-full pl-2 sm:w-[90%] xl:w-[30%] font-semibold">
            WHATSAPP NUMBER
          </h6>
          <input
            type="text"
            placeholder="78786 78786"
            onChange={(e) => setNumber(e.target.value)}
            className="w-full rounded-xl h-14 px-4 border sm:w-[90%] xl:w-[30%]"
          />

          <button
            type="submit"
            disabled={pending}
            className={`w-[90vw] font-semibold py-4 mt-4 rounded-xl sm:w-[50vw] xl:w-[30vw] ${
              pending ? "bg-slate-300" : "bg-[#26dcf5]"
            }`}
          >
            {pending ? "Submitting..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
