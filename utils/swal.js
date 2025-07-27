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
  });
};
