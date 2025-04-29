import { Button } from '@/components/ui/button';
import { ArrowRightIcon, LanguagesIcon, ScanTextIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="w-full px-8 lg:px-24 py-4 border-b">
        <nav>
          <ul className="relative flex items-center justify-between">
            <li className="z-20">
              <Link className="flex items-center gap-2" href="/">
                <Image
                  src="/logo.svg"
                  alt="Caraka logo"
                  width={24}
                  height={24}
                />
                <span className="text-2xl font-serif text-primary">Caraka</span>
              </Link>
            </li>
            <div className="hidden absolute inset-0 z-10 lg:flex items-center justify-center gap-4">
              <li>
                <Link href="#">Scan</Link>
              </li>
              <li>
                <Link href="#">Transliterate</Link>
              </li>
            </div>
            <li className="hidden lg:block z-20 space-x-4">
              <Button asChild variant="secondary">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center gap-8 lg:gap-16">
        <div className="p-8 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-16">
          <div className="flex flex-col items-center lg:items-start gap-8">
            <article className="space-y-4 text-center lg:text-left max-w-lg">
              <h1 className="text-2xl lg:text-6xl font-serif font-semibold">
                All-In-One Javanese Script Translator
              </h1>
              <p className="text-xs lg:text-base">
                Whether you&apos;re a student, tourist, or just curious to learn
                about Javanese script, Caraka is here to help you.
              </p>
            </article>
            <div className="flex flex-col lg:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#">
                  <ScanTextIcon />
                  Try Scanner
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#">
                  <LanguagesIcon />
                  Transliterate Hanacaraka
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="hero.svg"
            alt="Student studying"
            width={450}
            height={450}
          />
        </div>

        <div className="px-8 lg:px-24 flex flex-col items-center justify-center gap-8 lg:gap-16">
          <h2 className="text-xl lg:text-5xl text-center font-serif font-semibold">
            Our Features
          </h2>
          <div className="grid lg:grid-cols-3 items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center gap-8">
              <Image
                src="/context-aware.svg"
                alt="Machine learning"
                width={250}
                height={250}
              />
              <article className="text-center space-y-2">
                <h3 className="text-lg lg:text-3xl font-serif font-semibold">
                  Context-Aware Translation
                </h3>
                <p className="text-xs lg:text-base font-normal">
                  Caraka can understand the deeper meaning behind every phrase
                  for more accurate translations
                </p>
              </article>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
              <Image
                src="/ocr.svg"
                alt="Image upload"
                width={250}
                height={250}
              />
              <article className="text-center space-y-2">
                <h3 className="text-lg lg:text-3xl font-serif font-semibold">
                  Powerful OCR Engine
                </h3>
                <p className="text-xs lg:text-base font-normal">
                  Accurately recognize Javanese script, even from challenging
                  inputs like photos or handwriting
                </p>
              </article>
            </div>

            <div className="flex flex-col items-center justify-center gap-8">
              <Image
                src="/billingual.svg"
                alt="Globe"
                width={250}
                height={250}
              />
              <article className="text-center space-y-2">
                <h3 className="text-lg lg:text-3xl font-serif font-semibold">
                  Bilingual Output
                </h3>
                <p className="text-xs lg:text-base font-normal">
                  Seamlessly convert language used with Javanese script to
                  Indonesian and English
                </p>
              </article>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-4 lg:gap-8 py-16 mt-16 bg-accent/50">
          <Image
            src="/journey.svg"
            alt="Rocket to the moon"
            width={200}
            height={200}
          />
          <article className="text-center lg:space-y-4 max-w-3/4">
            <h2 className="text-xl lg:text-5xl font-serif font-semibold">
              Start Your Journey
            </h2>
            <p className="text-xs lg:text-lg">
              Caraka is designed to make your experience seamless and enjoyable.
            </p>
          </article>
          <Button size="lg" variant="ghost" asChild>
            <Link href="#">
              Explore Caraka
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </main>

      <footer className="py-8">
        <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-4 px-8 lg:px-24">
          <p>© 2025 Caraka</p>
          <div className="flex items-center gap-2">
            <LanguagesIcon size={16} />
            <label htmlFor="lang" className="sr-only">
              Language
            </label>
            <select id="lang" disabled>
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
            </select>
          </div>
        </div>
      </footer>
    </>
  );
}
