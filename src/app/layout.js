import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

config.autoAddCss = false;

export const metadata = {
  title: 'PrescriBio',
  description: 'Smarter Digital Prescriptions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}