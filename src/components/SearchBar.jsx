

// src/components/SearchBar.jsx
export default function SearchBar() {
  return (
    <div className="flex justify-center px-4 py-6 bg-white shadow-md">
      <div className="flex flex-col sm:flex-row w-full max-w-3xl gap-3 sm:gap-0">
        <input
          type="text"
          placeholder="शिर्षक किंवा वर्णन..."
          className="w-full px-4 py-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none"
        />
        <button className="bg-blue-900 text-white px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md">
          SEARCH
        </button>
      </div>
    </div>
  );
}