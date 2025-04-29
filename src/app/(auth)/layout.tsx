import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Link className="flex items-center gap-4" href="/">
        <Image src="/logo.svg" alt="Caraka logo" width={48} height={48} />
        <span className="text-5xl font-serif text-primary">Caraka</span>
      </Link>
      {children}
    </main>
  );
}
