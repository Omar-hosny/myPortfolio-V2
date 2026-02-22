import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-6 text-center max-w-6xl mx-auto">
        <h1 className="text-[150px] md:text-[200px] font-bold text-gradient leading-none">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page not found
        </h2>
        
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for seems to have wandered off. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="rounded-full px-8">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back Home
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="rounded-full px-8">
            <Link href="#contact">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
