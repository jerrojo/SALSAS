"use client";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function WhatsAppButton({ href, children }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn-primary">
      {children}
    </a>
  );
}


