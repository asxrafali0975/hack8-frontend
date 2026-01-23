

const ProfileCard = ({profile,name , position}) => {
  return (
    <div className="max-w-xs mx-auto rounded-xl shadow-md border p-6 mb-5 text-center bg-white ">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={profile} // replace with your image path 
          alt="Profile"
          className="w-32 h-32 rounded-full border-2 border-sky-500 object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="mt-4 text-lg font-bold text-gray-800">
        {name}
      </h2>

      {/* Position */}
      <p className="text-sm text-gray-500 italic">{position}</p>
    </div>
  );
};

export default ProfileCard;