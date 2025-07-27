import Image from "next/image";
import auth from "../../public/auth.jpg";

export default function Authlayout({ children }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 relative h-screen">
      <Image
        src={auth}
        alt="Auth layout Image"
        fill={true}
        className="-z-50 hidden md:block"
      />
      <div></div>
      {children}
    </section>
  );
}
