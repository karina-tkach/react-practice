import React, { useRef, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import blogData from "../data/blogs.json";
import NotFound from "./NotFound";
import Article from "../components/Article";
import BlogCard from "../components/BlogCard";
import { sortPosts } from "../utils/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BlogPostPage = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideNext();
    }
  }, []);

  const { id } = useParams();
  const post = blogData.find((item) => item.id.toString() === id);

  if (!post) {
    return <NotFound />;
  }

  const recentPosts = sortPosts(blogData, "most-recent").slice(0, 10);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col items-center text-center py-16 md:py-24">
        <p className="text-purple-600 font-semibold text-sm mb-2">Our blog</p>
        <h1 className="text-4xl font-bold text-gray-900">Resources and insights</h1>
        <p className="text-gray-600 text-base md:text-lg mt-3 max-w-2xl">
          The latest industry news, interviews, technologies, and resources.
        </p>
        <div className="text-left w-full">
          <div className="flex flex-col md:flex-row mt-6 gap-3 sm:gap-4 items-start md:justify-center">
            <div className="flex flex-col w-full md:w-[350px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full border rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <p className="text-gray-500 text-sm mt-2">
                We care about your data in our{" "}
                <a href="#" className="text-purple-600 underline">
                  privacy policy
                </a>.
              </p>
            </div>
            <button className="w-full md:w-[160px] bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold shadow hover:bg-purple-700">
              Get started
            </button>
          </div>
        </div>
      </div>

      <Article post={post} />

      <div className="mt-16">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900">Latest writings</h2>
            <p className="text-gray-600 text-base md:text-lg mt-6">The latest news, technologies, and resources from our team.</p>
          </div>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hidden md:inline-block bg-purple-600 rounded-lg py-2 px-3 text-white font-medium">
            View all posts
          </Link>
        </div>
        <div className="min-h-[350px] flex items-stretch mt-10">
          <Swiper
            ref={sliderRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {recentPosts.map((post) => (
              <SwiperSlide className="h-full" key={post.id}>
                <BlogCard post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-start items-center gap-4 mt-6">
          <button
            className="border border-gray-200 w-[50px] h-[50px] p-3 rounded-full shadow hover:bg-gray-300 transition-all"
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            <ArrowLeft className="w-6 h-6 text-gray-500" />
          </button>
          <button
            className="border border-gray-200 w-[50px] h-[50px] p-3 rounded-full shadow hover:bg-gray-300 transition-all"
            onClick={handleNext}
            aria-label="Next Slide"
          >
            <ArrowRight className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <Link
          to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="md:hidden inline-block w-full text-center bg-purple-600 rounded-lg py-2 px-3 text-white font-medium mt-6"
        >
          View all posts
        </Link>
      </div>


      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-20">
        <div className="md:w-1/2 text-left md:pr-20">
          <h2 className="text-3xl md:text-5xl md:leading-[60px] font-bold text-gray-900">
            Join 4,000+ startups growing with Untitled
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-5">
            Start your 30-day free trial today.
          </p>
          <div className="flex flex-col-reverse md:flex-row gap-3 mt-10">
            <button className="border border-gray-300 px-5 py-2 rounded-lg font-medium hover:bg-gray-100">
              Learn more
            </button>
            <button className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700">
              Get started
            </button>
          </div>
        </div>

        <div className="relative md:w-1/2 mt-6 md:mt-0">
          <img
            src={require("../assets/img/testimonial-image.jpg")}
            alt="Testimonial"
            className="rounded-lg shadow-md h-[550px] md:max-h-[550px] w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-60 text-white p-6 rounded-b-lg backdrop-blur-sm">
            <p className="text-lg md:text-3xl font-medium">
              “Untitled has saved us thousands of hours of work. We’re able to spin up projects and features faster.”
            </p>
            <p className="text-2xl md:text-xl font-bold mt-5">Alisa Hester</p>
            <p className="text-sm text-gray-300 mt-2">PM, Hourglass | Web Design Agency</p>
            <div className="flex items-center mt-2 space-x-1">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogPostPage;
