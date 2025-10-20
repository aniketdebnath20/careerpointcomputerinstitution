import Image from "next/image";

const Logo = () => (
    <div className="relative w-[60px] h-[40px]">
      <Image
        src="/2.png"
        alt="Career Point Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
  export default Logo;
