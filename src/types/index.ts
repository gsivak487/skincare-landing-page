export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface ContentData {
  navigation: {
    logo: string;
    links: NavigationLink[];
  };
  subNavigation: {
    links: NavigationLink[];
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    image: string;
  };
  hero1: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    image: string;
  };
  hero2: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    image: string;
  };
  products: {
    title: string;
    subtitle: string;
    items: Product[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  offerBanner: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    backgroundColor: string;
  };
  blog: {
    title: string;
    subtitle: string;
    posts: BlogPost[];
  };
  footer: {
    logo: string;
    description: string;
    sections: {
      title: string;
      links: NavigationLink[];
    }[];
    copyright: string;
  };
}