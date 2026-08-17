import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { siteConfig, products } from "@/lib/site-config";

const footerColumns = [
  {
    heading: "Products",
    links: products.map((product) => ({
      label: product.name,
      href: product.href,
    })),
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Articles", href: "/resources/articles" },
      { label: "Research", href: "/resources/research" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Moonar Academy", href: "/resources/academy" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Cookie Policy", href: "/legal/cookie-policy" },
      { label: "Legal Notice", href: "/legal/notice" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
              {siteConfig.tagline}
            </p>
            <Link
              href="https://www.linkedin.com/company/moonar-tyre-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Moonar on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-150 hover:border-text-primary hover:text-text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.56V9h3.554v11.452z" />
              </svg>
            </Link>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-text-muted">
                {column.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-border pt-8 text-xs text-text-muted lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1">
            <p>
              {siteConfig.legalName} &middot; {siteConfig.address.line1},{" "}
              {siteConfig.address.line2}
            </p>
            <p>VAT {siteConfig.address.vat}</p>
          </div>
          <p>&copy; {siteConfig.legalName}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
