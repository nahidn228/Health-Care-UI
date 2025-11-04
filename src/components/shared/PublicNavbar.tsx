"use client";

import { MenuIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const PublicNavbar = () => {
  const features = [
    {
      title: "Dashboard",
      description:
        "Personalized overview of appointments, records, and activities.",
      href: "/dashboard",
    },
    {
      title: "Appointments",
      description: "Book, manage, or cancel your doctor appointments.",
      href: "/appointments",
    },
    {
      title: "Doctors",
      description:
        "Browse and connect with qualified healthcare professionals.",
      href: "/doctors",
    },
    {
      title: "Patients",
      description:
        "Manage patient profiles and medical history (for doctors/admin).",
      href: "/patients",
    },
    {
      title: "Medical Records",
      description:
        "View and upload your health reports and prescriptions securely.",
      href: "/records",
    },

    {
      title: "Support",
      description: "Get assistance or contact customer service.",
      href: "/support",
    },
  ];

  const publicRoutes = [
    { path: "/", title: "Home" },
    { path: "/services", title: "Services" },
    { path: "/doctors", title: "Find Doctors" },
    { path: "/about", title: "About Us" },
    { path: "/contact", title: "Contact" },
  ];

  return (
    <section className="py-4 ">
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tighter">
              HelloDoc
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                {publicRoutes.map((route, index) => (
                  <NavigationMenuLink
                    href={route.path}
                    key={index}
                    className={navigationMenuTriggerStyle()}
                  >
                    {route.title}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    {features.map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={index}
                        className="hover:bg-muted/70 rounded-md p-3 transition-colors"
                      >
                        <div key={feature.title}>
                          <p className="text-foreground mb-1 font-semibold">
                            {feature.title}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <ModeToggle />
            <Button>Sign in</Button>
          </div>
          {/* Mobile view */}
          <div className="flex items-center gap-2 lg:hidden">
            
              <ModeToggle />
          
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="max-h-screen overflow-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2">
                      <span className="text-lg font-semibold tracking-tighter">
                        NH HealthCare
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-4">
                  <Accordion type="single" collapsible className="mb-2 mt-4">
                    <AccordionItem value="solutions" className="border-none">
                      <AccordionTrigger className="text-base hover:no-underline">
                        Features
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2">
                          {features.map((feature, index) => (
                            <Link
                              href={feature.href}
                              key={index}
                              className="hover:bg-muted/70 rounded-md p-3 transition-colors"
                            >
                              <div key={feature.title}>
                                <p className="text-foreground mb-1 font-semibold">
                                  {feature.title}
                                </p>
                                <p className="text-muted-foreground text-sm">
                                  {feature.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex flex-col gap-6">
                    {publicRoutes.map((route, index) => (
                      <Link
                        href={route.path}
                        key={index}
                        className="font-medium"
                      >
                        {route.title}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <Button>Sign in</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default PublicNavbar;
