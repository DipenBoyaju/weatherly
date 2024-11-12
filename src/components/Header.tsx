import { useTheme } from "@/context/ThemeProvider";
import { Link } from "react-router-dom";
import { CitySearch } from "./CitySearch";
import { ThemeToggle } from "./ThemeToggle";
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? logo3 : logo2}
            alt="Klimate logo"
            className="h-14"
          />
        </Link>

        <div className="flex gap-4">
          <CitySearch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}