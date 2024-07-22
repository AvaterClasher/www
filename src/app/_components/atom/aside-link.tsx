"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { type ClassValue } from "clsx";

import { cn } from "~/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  startWith: string;
  title?: string | null;
  className?: ClassValue;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const AsideLink = ({
  href,
  children,
  startWith,
  title,
  className,
  ...props
}: Props) => {
  const segment = useSelectedLayoutSegment();
  const tag = useSearchParams().get("tag");
  const isActive = tag === title || segment === title;

  return (
    <Link
      href={href}
      className={cn(
        isActive
          ? "bg-primary/10 text-foreground"
          : "text-muted-foreground hover:bg-primary/10 hover:text-foreground",
        "flex w-full items-center gap-x-2.5 px-5 py-1 transition-colors hover:bg-primary/10",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
