'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiFlag } from 'react-icons/fi'; 

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const currentLocale = segments[1]; 
    const currentPath = segments.slice(2).join('/'); 

  return (
    <nav className="bg-black text-white p-4 flex">
      <div className="flex flex-col items-start">
        <Link href={`/es/${currentPath}`}>
            <button  className="flex items-center">
                <FiFlag className="mr-1" /> Español
            </button>
        </Link>
        <Link href={`/en/${currentPath}`}>
            <button className="flex items-center">
                <FiFlag className="mr-1" /> English
            </button>
        </Link>
      </div>
      <div>
      <Link href={`/`}>
            <button className="text-white hover:underline ml-4">Home</button>
        </Link>
        <Link href={`/${currentLocale}/about`}>
            <button className="text-white hover:underline ml-4">About</button>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
