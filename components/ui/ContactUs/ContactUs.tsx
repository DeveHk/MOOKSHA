import { Koulen } from "@next/font/google";
import Image from "next/image";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

import ContactUsForm from "./ContactUsForm";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const ContactUs = () => {
  const containerRef: any = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(
        [
          ".borders-1",
          ".borders-2",
          ".borders-3",
          ".borders-4",
          ".cloud-small",
          ".owl-small",
        ],
        {
          scale: 0,
          duration: 1,
          opacity: 0,
          delay: 0,
          stagger: 0.2,
          ease: "expo",
        }
      );

      gsap.from(".bird-2", {
        opacity: 0,
        x: -150,
        ease: "power4",
        duration: 0.5,
        delay: 1.3,
      });
      gsap.from(".bird-1", {
        opacity: 0,
        x: 150,
        ease: "power4",
        duration: 0.5,
        delay: 1,
      });
    }, containerRef);

    return () => {
      return ctx.revert();
    };
  }, []);

  return (
    <div
      className={`${koulen.className} text-white h-[93vh] bg-[#f44142] justify-center items-center flex  overflow-x-hidden relative`}
      ref={containerRef}
    >
      <div className="z-10">
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 left-0 top-0 borders-1"
        />
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 right-0 -scale-x-100 top-0 borders-2"
        />
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 bottom-0 left-0 -scale-y-100  borders-3"
        />
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 bottom-0 right-0 -scale-y-100 -scale-x-100 borders-4"
        />
      </div>

      <div className="mt-6 md:mt-4 flex flex-col relative ">
        <div className="absolute md:bottom-[20%] bottom-[28%] transition-all duration-100  -right-[20%]  md:scale-[2.2] scale-[1.8]">
          <Image
            src="bird.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-28 lg:w-36 xl:w-42  rotate-[10deg] -scale-x-100 bird-1"
          />
        </div>
        <div className="absolute md:top-[18%] top-[12%] -left-[20%]  transition-all duration-100  md:scale-[2.2] scale-[1.8]">
          <Image
            src="bird.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-28 lg:w-36 xl:w-42 bird-2"
          />
        </div>
        <h1 className="text-4xl lg:text-5xl text-center  mb-7 md:mb-4 drop-shadow-xl contact-us">
          CONTACT US
        </h1>
        <ContactUsForm />
      </div>
    </div>
  );
  /*<div className={`${koulen.className} text-white h-[93vh] bg-prussian-blue-1000 justify-between flex flex-row overflow-hidden `}>
        <div className="flex flex-col justify-between ">
          <Image
            src="border-event-contact.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-28 lg:w-40 xl:w-52"
          />
          <Image
            src="bird.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-28 lg:w-40 xl:w-44 md:scale scale-[5] relative -top-52 -rotate-[10deg]"
          />
          <Image
            src="border-event-contact.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-28 lg:w-40 xl:w-44  -scale-y-100 "
          />
        </div>
        <div className="mt-8">
          <h1 className="text-5xl lg:text-6xl text-center  mb-10 ">CONTACT US</h1>
          <ContactUsForm />
        </div>
        <div className="flex flex-col justify-between items-end">
          <Image
            src="border-event-contact.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-28 lg:w-40 xl:w-44 -scale-x-100"
          />
          <div className="">
            <Image
              src="bird.svg"
              width={100}
              height={100}
              alt="border"
              className=" w-28 lg:w-40 xl:w-44 -scale-x-100 rotate-[20deg] "
            />
          </div>
          <Image
            src="border-event-contact.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-28 lg:w-40 xl:w-44  -scale-x-100 -scale-y-100"
          />
        </div>
      </div>*/
};

export default ContactUs;
