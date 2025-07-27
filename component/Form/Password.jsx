"use client";

import { FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

export const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 bg-white outline-none">
      <div className="flex items-center gap-2 w-full">
        <FaLock size={16} className="text-gray-500" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="outline-none w-full text-sm"
          name="password"
          required
          autoComplete="off"
        />
      </div>
      {showPassword ? (
        <AiFillEye
          onClick={() => setShowPassword(false)}
          className="text-gray-500 cursor-pointer"
        />
      ) : (
        <AiFillEyeInvisible
          onClick={() => setShowPassword(true)}
          className="text-gray-500 cursor-pointer"
        />
      )}
    </div>
  );
};
