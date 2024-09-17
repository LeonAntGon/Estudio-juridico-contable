import React, { useState } from 'react';
import Link from 'next/link';

interface HoverLinkProps {
  href: string;
  text: string;
}

const HoverLink: React.FC<HoverLinkProps> = ({ href, text }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className='text-light'
        style={{
          fontSize: '0.8rem',
          fontFamily: 'inherit',
          fontWeight: 800,
          cursor: 'pointer',
          position: 'relative',
          border: 'none',
          background: 'none',
          textTransform: 'uppercase',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
          transitionDuration: '400ms',
          transitionProperty: 'color',
          outline: 'none',
          textDecoration: 'none', // Remove underline from the link
        }}
      >
         {text}
        <span
        className='bg-light'
          style={{
            content: '""',
            pointerEvents: 'none',
            position: 'absolute',
            bottom: '-2px',
            left: hover ? '0%' : '50%',
            width: hover ? '100%' : '0%',
            height: '2px',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
            transitionDuration: '400ms',
            transitionProperty: 'width, left',
          }}
        />
      
    </Link>
  );
};

export default HoverLink;
