import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import '@/app/globals.css';
import { Analytics } from '@vercel/analytics/react';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es">
      <body>
        
          <Header />
          <main>{children}</main>
          <Analytics/>
          <Footer />
          
      </body>
    </html>
  );
}