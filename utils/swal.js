"use client";

import Swal from "sweetalert2";

export const handleWarnSwal = (message) => {
  Swal.fire({
    icon: "warning",
    title: "⚠️ Heads up!",
    text: message || "Something went wrong",
    background: "#1f1f1f", // dark background
    color: "#ffffff", // white text
    iconColor: "#facc15", // yellow icon
    confirmButtonColor: "#3b82f6", // Tailwind's blue-500
    confirmButtonText: "Got it!",
    customClass: {
      popup: "rounded-2xl shadow-xl p-6",
      title: "text-lg font-semibold",
      confirmButton: "px-5 py-2",
    },
    backdrop: `
      rgba(0,0,0,0.7)
      url("https://i.gifer.com/YCZH.gif")
      left top
      no-repeat
    `,
  });
};
