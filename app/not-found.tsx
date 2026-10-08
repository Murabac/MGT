import Link from "next/link";
import { getMessages } from "@/content/messages";

const messages = getMessages("en");

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-4 py-20 sm:px-6"
    >
      <span className="font-condensed text-xs font-bold uppercase tracking-widest text-green">
        {messages.notFound.eyebrow}
      </span>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {messages.notFound.title}
      </h1>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
        {messages.notFound.body}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-brand bg-blue px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-deep"
        >
          {messages.notFound.backHome}
        </Link>
        <Link
          href="/contact"
          className="rounded-brand border border-line px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:border-blue hover:text-blue"
        >
          {messages.notFound.contact}
        </Link>
      </div>
    </main>
  );
}
