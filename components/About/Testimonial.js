import Image from 'next/image';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Rohan',
    job: '- Project Admin',
    image: 'https://avatars.githubusercontent.com/u/33249782?v=4',
    quote:
      "This application is excellent! It's like the Netflix of books! As a college student, this app has greatly aided me in reading science and mathematics. I have encountered no issues and found most of the books I needed. Thanks! I genuinely adore this app!",
    linkedIn:"https://www.linkedin.com/in/rohansx/",
    github:"https://github.com/rohansx",
    twitter:"https://twitter.com/therohanx"
  },
  {
    id: 2,
    name: 'Deepak',
    job: '- Project Collaborator',
    image: 'https://avatars.githubusercontent.com/u/96341431?v=4',
    quote:
      "The assortment of ebooks and audiobooks is abundant. I have discovered and saved numerous books to read and listen to that would have otherwise cost me a fortune elsewhere. There's no comparison at all!",
    linkedIn:"https://www.linkedin.com/in/k-deepak04/",
    github:"https://github.com/k-deepak04",
    twitter:"https://twitter.com/k_deepak04",
  },
  {
    id: 3,
    name: 'Siddhant',
    job: '- Project Mentor',
    image: 'https://avatars.githubusercontent.com/u/85052056?v=4',
    quote:
      "From significant literary works and comprehensive historical and scientific studies to popular fiction and self-help books, it's remarkable how much there is to discover on Informatician. Fantastic!",
    linkedIn:"https://www.linkedin.com/in/siddhant-pawar-398a05201/",
    github:"https://github.com/SiddhantPawar03",
    twitter:"https://twitter.com/Siddhan56824277",
  },
  // Add more testimonials here
];


export default function Testimonial() {
  return (
    <div className="mt-20 mb-28">
      <h1 className="text-center text-4xl font-bold">Our Core Team</h1>
      <p className="text-center mt-2 mb-5">
        What Our Core Team Say About Informatician.
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transition"
          >
            <Image
              width={120}
              height={120}
              loading="lazy"
              className="w-24 h-24 mx-auto mt-4 rounded-full border-2 border-black"
              src={testimonial.image}
              alt={testimonial.name}
            />

            <div className='flex justify-center mt-6 gap-3 alignment'>
            <a href={testimonial.github} target='_blank' className='text-white text-[20px] rounded-[5px] p-2 bg-[#0f498f]'>
              <FaGithub />
            </a>
            <a href={testimonial.linkedin} target='_blank' className='text-white text-[20px] rounded-[5px] p-2 bg-[#0f498f]'>
              <FaLinkedin />
            </a>


            </div>
            <div className="p-6 alignment">
              <p className="text-base text-gray-800 dark:text-gray-200">
                {testimonial.quote}
              </p>
              <div className="mt-4 alignment">
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {testimonial.name}
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-400 alignment">
                  {testimonial.job}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
