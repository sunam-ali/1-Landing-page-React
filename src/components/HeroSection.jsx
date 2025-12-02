import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import Button from "./ui/Button";

export default function HeroSection() {
  return (
    <section>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          SunamVR Build tools{" "}
          <span className="bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intutive development tool. Get started today and turn your imagination
          into immersive reality!
        </p>
        <div className="flex justify-center my-10">
          <Button className="bg-linear-to-r from-orange-500 to-red-500 mx-3 ">
            Start for free
          </Button>
          <Button className="border mx-3 hover:bg-white hover:text-black">
            Documentaiton
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 justify-center items-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
    </section>
  );
}
