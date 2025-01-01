// utils/fonts.js
import { Inter, Poppins, Montserrat, Roboto_Slab, Open_Sans } from 'next/font/google';

export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export const robotoSlab = Roboto_Slab({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-slab'
});

export const openSans = Open_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans'
});