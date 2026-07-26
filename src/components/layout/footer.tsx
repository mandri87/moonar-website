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
      { label: "About", href: "/company/about" },
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
