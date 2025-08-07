import { CircleArrowRight, TrendingUp } from 'lucide-react';
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string
  buttonText: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description, buttonText, image }) => {
  return (
    <section className="bg-gradient-to-br from-white-50 to-pink-50" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[600px] lg:min-h-[700px]">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 py-12 lg:py-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {title}<TrendingUp className="h-12 w-12 inline" />
            </h1>
            <p className="text-lg sm:text-xl text-gray-60 mb-8 max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>
             <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {description} <span className='text-bold underline underline-offset-2'> Continue Reading.</span>
            </p>
            
            <button className="bg-black hover:bg-green-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {buttonText}<CircleArrowRight className="h-5 w-5 ml-2 inline" />
            </button>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <img
              src={image}
              alt="Natural skincare products"
              className="w-full h-[400px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;