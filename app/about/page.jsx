import "../fonts.css";
import { TbArrowUpRight } from "react-icons/tb";

export const metadata = {
  title: {
    default: "About Shaarda Interiors - Interior Design in Baroda",
    template: "About Us | Shaarda Interiors  ",
  },
  description:
    "Learn about Shaarda Interiors, your trusted interior design partner in Baroda. Discover our passion for transforming spaces and making your dreams a reality.",
  keywords: [
    "About Shaarda Interiors",
    "Interior Design Baroda",
    "Interior Design Studio",
    "Transforming Spaces",
    "Design Partner",
  ],
};

export default function About() {
  return (
    <div>
      <div className="bg-[url('/image2/43.jpg')] bg-center bg-cover brightness-90 ">
        <h1
          className="container py-14 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left font-ibm-plex-mono"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          WHO ARE WE?
        </h1>
      </div>
      <div className="container ">
        <div className="py-1 lg:py-14">
          <h2
            className="p-4 text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We have great idea & Interior Design
          </h2>

          <div className="lg:flex lg:flex-col justify-center items-center">
            <iframe
              className="video text-center mb-5 lg:w-7/12 lg:h-96"
              title="Youtube player"
              sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
              src={`https://youtube.com/embed/4iEKJMglcoc?autoplay=1`}
            ></iframe>

            <div className="block lg:flex items-center justify-center ">
              <p
                className="text-2xl font-medium lg:w-1/2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                The Shaarda interior design company is a company that provides
                interior design services for homes, offices, apartments, and
                others. We provide the best interior design services for you. We
                have a team that is experienced in the field of interior.
              </p>

              <a
                className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
                href=""
                style={{ fontFamily: "Open Sans", fontSize: "large" }}
              >
                Read More <TbArrowUpRight className="text-xl" />
              </a>
            </div>
          </div>

          {/* <div className="lg:flex lg:flex-col justify-center">
                        
                        <div className='items-center'>
                            <p className="text-2xl font-medium lg:w-1/2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                The Shaarda interior design company is a company that provides interior design services for homes, offices, apartments, and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior.
                            </p>
                            <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="" style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>
                                Read More <TbArrowUpRight className="text-xl" />
                            </a>
                        </div>
                    </div> */}
        </div>
        {/* <div className="lg:flex lg:justify-center gap-x-8 pb-5 lg:mb-5">
                    <div className="flex items-center justify-center"> 

                    </div>
                </div> */}

        {/* <div className="lg:py-20">
                    <div className="pt-8 pb-4">
                        <h1 className="text-4xl font-bold tracking-wider text-center">TEAM</h1>
                    </div>
                    <div className="grid gap-20 py-8 lg:grid-cols-3">
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                                <Image src="/image/profile2.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
                                <p className="text-sm text-gray-400">
                                    Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                                <Image src="/image/profile1.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
                                <p className="text-sm text-gray-400">
                                    Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                                <Image src="/image/profile3.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
                                <p className="text-sm text-gray-400">
                                    Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>
    </div>
  );
}
