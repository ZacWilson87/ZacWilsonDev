import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-portfolio-black/80 backdrop-blur-md z-50 border-b border-portfolio-black/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold gradient-heading">
            ZacWilsonDev
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${
                location.pathname === item.path ? "nav-item-active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-portfolio-green text-black hover:bg-portfolio-green/80">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={toggleMenu}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-portfolio-black/95 border-b border-muted">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${
                  location.pathname === item.path ? "nav-item-active" : ""
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-portfolio-green text-black hover:bg-portfolio-green/80 w-full">
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
