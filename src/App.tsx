import React from 'react';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import TestimonialSection from './components/TestimonialSection';
import OfferBanner from './components/OfferBanner';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import { ContentData } from './types';
import contentData from './data/content.json';

const App: React.FC = () => {
  const {
    cartItemsCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartItemQuantity
  } = useCart();

  const data = contentData as ContentData;

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        logo={data.navigation.logo}
        links={data.navigation.links}
        cartItemsCount={cartItemsCount}
      />

      <SubNavbar 
        links={data.subNavigation.links}
      />

      <Hero1
        title={data.hero1.title}
        subtitle={data.hero1.subtitle}
        description={data.hero1.description}
        buttonText={data.hero1.buttonText}
        image={data.hero1.image}
      />
      
      <Hero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        buttonText={data.hero.buttonText}
        image={data.hero.image}
      />
      
      <ProductSection
        title={data.products.title}
        subtitle={data.products.subtitle}
        products={data.products.items}
        getCartItemQuantity={getCartItemQuantity}
        onAddToCart={addToCart}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
      />
      
      <TestimonialSection
        title={data.testimonials.title}
        testimonials={data.testimonials.items}
      />
      
      <OfferBanner
        title={data.offerBanner.title}
        subtitle={data.offerBanner.subtitle}
        description={data.offerBanner.description}
        buttonText={data.offerBanner.buttonText}
        backgroundColor={data.offerBanner.backgroundColor}
      />
      
      <BlogSection
        title={data.blog.title}
        subtitle={data.blog.subtitle}
        posts={data.blog.posts}
      />

      <Hero2
        title={data.hero2.title}
        subtitle={data.hero2.subtitle}
        description={data.hero2.description}
        buttonText={data.hero2.buttonText}
        image={data.hero2.image}
      />
      
      <Footer
        logo={data.footer.logo}
        description={data.footer.description}
        sections={data.footer.sections}
        copyright={data.footer.copyright}
      />
    </div>
  );
};

export default App;