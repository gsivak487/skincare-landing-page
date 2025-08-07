import { CircleArrowRight } from 'lucide-react';
import React from 'react';

interface OfferBannerProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  backgroundColor: string;
}

const OfferBanner: React.FC<OfferBannerProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  backgroundColor,
}) => {
  return (
    <section className="py-16" style={{ backgroundColor }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        <h3 className="text-2xl font-semibold text-white mb-4">{subtitle}</h3>
        <p className="text-5xl text-white mb-8 opacity-90">{description}</p>
        <button className="bg-white hover:bg-gray-300 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          {buttonText}<CircleArrowRight className="h-5 w-5 ml-2 inline" />
        </button>
      </div>
    </section>
  );
};

export default OfferBanner;