import { MdEmail } from "react-icons/md";

export const Email = () => {
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 bg-white outline-none">
      <MdEmail size={16} className="text-gray-500" />
      <input
        type="email"
        placeholder="Email"
        className="outline-none w-full text-sm"
        name="email"
        required
        autoComplete="off"
      />
    </div>
  );
};
