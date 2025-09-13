import { Book, Grid, Menu, Sunset, Trees, Zap } from "lucide-react";

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
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuItem } from "@/lib/types/types";
import { services } from "@/lib/constants/services";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { helpAndContactItems } from "@/lib/constants/aboutUs";

interface TopBarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  button?: {
         title: string;
      url: string;
  };
}
const menuItemServices: MenuItem[] = [
  {
    title: "Alla våra tjänster",
    description:
      "Utforska alla våra tjänster och hitta rätt hjälp för dina behov.",
    url: "/alla-vara-tjanster",
    icon: <Grid className="size-5 shrink-0" />,
    className: "col-span-2 flex justify-center",
  },
  ...services.map((e) => ({
    title: e.title,
    icon: e.icon,
    description: e.shortDescription,
    url: e.url,
  })),
];


const TopBar = ({
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Next Flytt",
  },
  menu = [
    {
      title: " Våra tjänster",
      url: "/alla-vara-tjanster",
      items: menuItemServices,
      hastwoCols: true,
    },
    // {
    //   title: "Hjälp & Kontakt",
    //   url: "/",
    //   items: resourcesItems,
    // },
    {
      title: "Om Nextflytt",
      url: "/om-oss",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Kontakt",
      url: "/kontakt",
    },
  ],
  button = {
    title:"KOSTNADSFRI OFFERT",
    url:"/offert"
  },
}: TopBarProps) => {
  return (
    <section className="py-4 px-4">
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant={"secondary"} className="font-semibold" asChild >
              <Link href={button.url}>{button.title}</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8 " alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8 " alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild>
                      <a href={button.url}>{button.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="font-semibold">{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent
          className={cn("bg-popover text-popover-foreground")}
        >
          <ul
            className={cn(
              item.hastwoCols
                ? "grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] "
                : " w-[400px]"
            )}
          >
            {item.items.map((component) => (
              <ListItem item={component} />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

function ListItem({ item }: { item: MenuItem }) {
  return (
    <li className={cn(" w-full", item.className)}>
      <NavigationMenuLink asChild>
        <Link
          className="hover:bg-muted hover:text-accent-foreground flex w-full select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
          href={item.url}
        >
          <div className="text-foreground">{item.icon}</div>
          <div>
            <div className="text-sm font-semibold">{item.title}</div>
            {item.description && (
              <p className="text-muted-foreground text-sm leading-snug">
                {item.description}
              </p>
            )}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default TopBar;
