import { Metadata } from "next";
import { ENV } from "~/lib/constants";

const title = "404";
const description = "Sorry, i couldn’t find the page you’re looking for.";
const url = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/404`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
  },
  twitter: {
    title,
    description,
  },
};

export default function NotFound() {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <div className="relative text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page not found :(
        </h1>
        <p className="text-off-white mt-6 text-base leading-7">
          Sorry, i couldn’t find the page you’re looking for.
        </p>
        <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-full bg-secondary blur-2xl" />
      </div>
    </section>
  );
}
