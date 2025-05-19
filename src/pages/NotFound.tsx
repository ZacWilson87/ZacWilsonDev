import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    document.title = "Page Not Found | ZacWilsonDev";
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold gradient-heading mb-4">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Oops! This page couldn't be found.
        </p>
        <div className="flex space-x-4">
          <Button
            asChild
            className="bg-portfolio-green text-black hover:bg-portfolio-green/80"
          >
            <Link to="/">Return Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-portfolio-pink text-portfolio-pink hover:bg-portfolio-pink/10"
          >
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
