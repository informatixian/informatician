'use client'

import { useEffect } from "react";
import "./About.css";
import { useMediaQuery } from "react-responsive";
import Feature from "@/components/About/Feature";
import Testimonial from "@/components/About/Testimonial";
import Download from "@/components/About/Download";
import AOS from "aos";
import "aos/dist/aos.css";
import '@/components/About/Feature.css'
import Image from "next/image";

const About = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="about">
      <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-28 mb-5 max-w-screen-2xl">
        <div className="md:w-1/2 w-11/12" data-aos="fade-left" data-aos-duration="500">
          <Image
            loading='lazy' src={"/assets/mainPages/aboutUs.webp"} width={600} height={600} className="w-11/12" alt="about us" />
        </div>
        <div className="md:w-1/2 p-3 w-11/12 text-center" data-aos="fade-right" data-aos-duration="500">
          <h1 className="text-5xl mb-6 font-bold">About Us</h1>
          <p className="leading-6 text-justify">
            Book Listing App connects book lovers, fostering a vibrant community
            of diverse genres. Our mission is to make reading accessible,
            enjoyable, and interactive for all, promoting literacy and building
            a strong book-centric community. Discover new books, engage in
            discussions, and share the joy of reading. Our curated collection
            caters to various interests, ensuring there&apos;s something for every
            reader. Join us to explore, connect, and celebrate the magic of
            reading!
          </p>
        </div>
      </div>
      <Feature />
      <div className="Testimonial"><Testimonial /></div>
      {/* <Download /> */}
    </div>
  );
};

export default About;
