import Link from 'next/link';
 
export default function TopNav() {
  return (
    <>
    <div className="flex justify-center gap-20 pt-8">
        <Link
            href="/"
            className="font-medium drawLine"
          >Home
        </Link>
        <Link
            href="/about"
            className="font-medium drawLine"
          >About
        </Link>
        <Link
            href="/projects"
            className="font-medium drawLine"
          >Projects
        </Link>
        <Link
            href="/contact"
            className="font-medium drawLine"
          >Contact
        </Link>
        </div>
    </>
  );
}