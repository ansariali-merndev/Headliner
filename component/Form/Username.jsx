import { FaUser } from "react-icons/fa";

export const Username = () => {
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 bg-white outline-none">
      <FaUser size={16} className="text-gray-500" />
      <input
        name="username"
        type="text"
        placeholder="Username"
        className="outline-none w-full text-sm"
        required
        autoComplete="off"
      />
    </div>
  );
};
