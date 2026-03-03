import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo_removed.png" alt="Logo" className="w-14 h-8 cursor-pointer" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/chi-sono" className="text-sm font-medium hover:text-primary transition-colors">
            Chi sono
          </Link>
          <Link to="/patologie" className="text-sm font-medium hover:text-primary transition-colors">
            Patologie
          </Link>
          <Link to="/trattamenti" className="text-sm font-medium hover:text-primary transition-colors">
            Trattamenti
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Novità
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/prenotazione" className="text-sm font-medium hover:text-primary transition-colors">
            Contattami
          </Link>
          <a href="/prenotazione#booking">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Prenota
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="container mx-auto px-6 py-4 flex flex-col gap-4 border-t">
          <Link
            to="/chi-sono"
            onClick={closeMenu}
            className="text-base font-medium hover:text-primary transition-colors py-2"
          >
            Chi sono
          </Link>
          <Link
            to="/patologie"
            onClick={closeMenu}
            className="text-base font-medium hover:text-primary transition-colors py-2"
          >
            Patologie
          </Link>
          <Link
            to="/trattamenti"
            onClick={closeMenu}
            className="text-base font-medium hover:text-primary transition-colors py-2"
          >
            Trattamenti
          </Link>
          <Link
            to="/blog"
            onClick={closeMenu}
            className="text-base font-medium hover:text-primary transition-colors py-2"
          >
            Novità
          </Link>
          <div className="flex flex-col gap-3 pt-2">
            <Link to="/prenotazione" onClick={closeMenu} className="w-full">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                Prenota ora
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
