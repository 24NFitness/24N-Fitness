'use client';

import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="fixed top-[96px] left-0 right-0 z-40 w-full bg-red-600 text-white">
      <div className="flex min-h-[40px] items-center justify-center gap-3 px-4 py-2 text-center">
        <span className="text-xs md:text-sm font-semibold tracking-wide">
            BUY 2 MONTHS GET 2 MONTHS FREE
        </span>

        <Link
          href="/contact-us"
          className="text-xs md:text-sm font-bold underline underline-offset-2 hover:no-underline"
        >
          CONTACT US →
        </Link>
      </div>
    </div>
  );
}