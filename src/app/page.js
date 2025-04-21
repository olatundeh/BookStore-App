import Image from "next/image";
import backgroundImage from "../../public/home/book-bg.png";

export default function Home() {
  return (
    <div className="flex flex-col relative justify-center items-center h-screen">
      <Image
        className="blur-sm"
        src={backgroundImage}
        alt="Background Image"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }}
      />
    </div>
  );  
}
