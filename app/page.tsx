import { CarouselClient } from '@app/components/Carousel/Carousel';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import { AiFillBell } from "react-icons/ai";

export default function Home() {
  return (
    <div className="mx-auto relative sm:px-20 py-5">
      <div className="text-center w-full relative">
        <div className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-55px)] w-full bg-black opacity-50"></div>
        <img
          src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Background Image"
          className="w-full h-[200px] sm:h-fit"
        />
        <div className="absolute top-[40px] right-[30px] sm:top-2/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
          <h2 className="sm:text-4xl mb-4">Welcome to Harns Lab</h2>
          <h1 className="sm:text-[90px] sm:leading-[90px]">
            Web Design and Development
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row relative items-center bg-white mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-blue-site font-site">
          <h3 className="flex-1 sm:text-3xl py-4 px-8 text-center sm:text-left">
            Your Digital Revolution Starts Here
          </h3>
          <a
            href="/contact"
            className="btn-main sm:text-2xl sm:p-8 hover:bg-purple-site w-fit"
          >
            Get Started
          </a>
        </div>
      </div>


      <div
        className="flex mt-12 sm:mt-32 sm:gap-12 flex-col sm:flex-row"
        data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <div className="basis-1/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">Our Vision</h3>
            <p className="my-6 text-sm">
              To become the bedrock of organizations that have conquered the digital world.
            </p>
            <a
              href="/about"
              className="text-purple-site py-6 font-site"
              data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
            >
              Read More
            </a>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_615,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
            <h3 className="text-2xl font-site">Who Are We</h3>
            <p className="my-6 text-sm">
              We are a web design agency in Sri Lanka dedicated to crafting complete, customized websites for small
              and medium businesses. Our commitment is rooted in years of experience, ensuring exceptional service that
              perfectly aligns with your business needs. We continuously strive to deliver the best possible solutions
              to our valued customers.
            </p>
            <a href="/about" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:mt-32 mb-12 sm:gap-12">
        <div className="basis-2/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_682,h_568,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-44 sm:mt-[-230px]">
            <h3 className="text-2xl font-site">Our Mission</h3>
            <p className="my-6 text-sm">
              To help organizations go digital, opening doors to a new world of opportunities.
            </p>
            <a href="/news" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_486,h_568,al_tr,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-530px]">
            <h3 className="text-2xl font-site">Why Us</h3>
            <p className="my-6 text-sm">
              We're not just creating websites; we're crafting your digital success story. Here's why we stand out.
            </p>
            <a href="/contact" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-3xl sm:text-5xl text-center mb-10 sm:mb-20 font-site">
        What We Offer
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 sm:justify-between items-center font-site">
  {['Tailored Design', 'Passion for Innovation', 'Years of Expertise'].map((text, index) => (
    <div key={index} className="relative text-center sm:text-left">
      <div className="flex flex-col items-center border border-purple-site rounded-lg bg-white p-4">
        <AiFillBell className="text-2xl sm:text-4xl text-blue-site mb-2" />
        <span className="text-xs sm:text-lg text-blue-site">
          {text}
        </span>
      </div>
    </div>
  ))}
</div>
      <CarouselClient />
    </div>
  );
}
