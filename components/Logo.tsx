import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="ProLine Roofing & Solar"
        width={160}
        height={60}
        priority
        className="h-14 w-auto"
      />
    </Link>
  );
}
