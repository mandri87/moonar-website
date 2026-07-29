"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/site-config";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [openLabels, setOpenLabels] = useState<string[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  function toggleSection(label: string) {
    setOpenLabels((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  }

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusables?.[0]?.focus();

    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && focusables && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-sm text-text-primary focus-visible:outline-none"
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-x-0 top-18 bottom-0 z-50 flex flex-col gap-1 overflow-y-auto border-t border-border bg-background px-6 py-8"
            >
              {mainNav.map((item) => {
                if ("children" in item) {
                  const isOpen = openLabels.includes(item.label);
                  return (
                    <div key={item.label} className="border-b border-border">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleSection(item.label)}
                        className="flex w-full items-center justify-between py-4 text-base font-medium text-text-primary"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-text-muted transition-transform duration-150",
                            isOpen && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen ? (
                        <div className="flex flex-col gap-1 pb-4 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="py-2 text-sm text-text-secondary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 text-base font-medium text-text-primary"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-6">
                <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                  Request a Demo
                </Button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
