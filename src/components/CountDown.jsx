import React, { useEffect, useState } from "react";

export default function CountdownTimer() {
  const calculateTimeLeft = () => {
  const targetDate = new Date("2025-09-29T10:00:00").getTime();// set your date
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBoxes = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6 px-4">
      {timeBoxes.map((t, idx) => (
        <div
          key={idx}
          className="bg-black text-white p-3 rounded-xl shadow-md w-14 sm:w-28 md:w-28 text-center flex flex-col items-center opacity-78"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {t.value}
          </p>
          <span className="text-xs sm:text-sm md:text-base text-gray-400">
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}