import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div>
      <Link href={href} className={isActive ? "px-2 py-1 bg-blue-500 text-white rounded" : "px-2 py-1"}> {children} </Link>
    </div>
  );
};

export default NavLink;