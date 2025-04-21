import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../public/home/book-bg.png";
import {SparklesIcon} from "@heroicons/react/24/solid";

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
      <div className="flex flex-col justify-center items-center bg-purple-100 rounded-md p-2 lg:w-2/5 h-1/4 z-10">
        <div className="flex pb-5 mb-5 text-5xl text-purple-800">
          <SparklesIcon className="h-12 w-12" />
          <p>BookStore</p>
        </div>
        <div>
          <Link 
            className="bg-purple-700 text-white rounded-sm p-2"
            href="/store">
            Take a look at our store
          </Link>
        </div>
      </div>
    </div>
  );  
}
