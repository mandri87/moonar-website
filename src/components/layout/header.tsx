import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { NavDropdown } from "@/components/layout/nav-dropdown";
import { mainNav } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-18 items-center justify-between py-2">
        <Link
          href="/"
          className="rounded-sm focus-visible:outline-none"
          aria-label="Moonar home"
        >
          <Logo height={52} />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {mainNav.map((item) =>
            "children" in item ? (
              <NavDropdown
                key={item.label}
                label={item.label}
                items={item.children}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Request a Demo
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
