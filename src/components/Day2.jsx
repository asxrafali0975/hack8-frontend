import React from 'react'

function Day2({day2}) {
  return (
   <>
   <div className="bg-gray-900 rounded-2xl p-6   shadow-md">
            <span className="bg-purple-600 text-xs px-3 py-1 rounded-full text-white">Day 2</span>
            <h3 className="text-lg font-semibold mt-4 mb-6 text-white">Polish & Present</h3>
            <ul className="space-y-5">
              {day2.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-purple-400 mt-2 text-white"></div>
                  <div className="text-left">
                    <p className="font-medium">{item.title}</p>
                    <span className="text-sm  text-white">
                      {item.time} — {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
   </>
  )
}

export default Day2