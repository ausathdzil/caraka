import { Button } from '@/components/ui/button';
import { ArrowRightIcon, LanguagesIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
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
                <Link href="#">Login</Link>
              </Button>
              <Button asChild>
                <Link href="#">Get Started</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center gap-8 lg:gap-16">
        <div className="px-8 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-16">
          <div className="flex flex-col items-center lg:items-start gap-8">
            <article className="space-y-4 text-center lg:text-left max-w-lg">
              <h1 className="text-2xl lg:text-6xl font-serif font-medium">
                All-in-one Javanese Script Translator
              </h1>
              <p className="text-xs lg:text-lg">
                Whether you*&apos;re a student, tourist, or just curious to
                learn about Javanese script, Caraka is here to help you.
              </p>
            </article>
            <div className="flex flex-col lg:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#">Try Scanner</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#">Transliterate Hanacaraka</Link>
              </Button>
            </div>
          </div>
          <Image src="hero.svg" alt="Hero" width={450} height={450} />
        </div>

        <div className="px-8 lg:px-24 flex flex-col items-center justify-center gap-8 lg:gap-16">
          <h2 className="text-xl lg:text-5xl text-center font-serif font-medium">
            Our Features
          </h2>
          <div className="grid lg:grid-cols-3 items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center gap-8">
              <Image
                src="/context-aware.svg"
                alt="Machine Learning"
                width={250}
                height={250}
              />
              <article className="text-center space-y-2">
                <h3 className="text-lg lg:text-3xl font-serif font-medium">
                  Context-Aware Translation
                </h3>
                <p className="text-xs lg:text-base">
                  Caraka can understand the deeper meaning behind every phrase
                  for more accurate translations
                </p>
              </article>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
              <Image src="/ocr.svg" alt="OCR" width={250} height={250} />
              <article className="text-center space-y-2">
                <h3 className="text-lg lg:text-3xl font-serif font-medium">
                  Powerful OCR Engine
                </h3>
                <p className="text-xs lg:text-base">
                  Accurately recognize Javanese script, even from challenging
                  inputs like photos or handwriting
                </p>
              </article>
            </div>

            <div className="flex flex-col items-center justify-center gap-8">
              <Image
                src="/billingual.svg"
                alt="Machine Learning"
                width={250}
                height={250}
              />
              <article className="text-center space-y-2">
                <h3 className="text-lg lg:text-3xl font-serif font-medium">
                  Bilingual Output
                </h3>
                <p className="text-xs lg:text-base">
                  Seamlessly convert language used with Javanese script to
                  Indonesian and English
                </p>
              </article>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-4 lg:gap-8 py-16 mt-16 bg-accent/50">
          <Image src="/journey.svg" alt="Journey" width={200} height={200} />
          <article className="text-center lg:space-y-4 max-w-3/4">
            <h2 className="text-xl lg:text-5xl font-serif font-medium">
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
        <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-8 px-8 lg:px-24">
          <p>© 2025 Caraka</p>
          <div className="hidden gap-2">
            <LanguagesIcon size={16} />
            <select disabled>
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
}
