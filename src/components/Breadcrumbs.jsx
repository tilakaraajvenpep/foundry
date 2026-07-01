import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on the homepage
  if (location.pathname === "/") return null;

  return (
    <div className="bg-slate-100/50 py-3 border-b border-slate-200/60 dark:bg-slate-900/30 dark:border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            
            // Format the path text (capitalize, replace hyphens)
            const displayName = value
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

            return (
              <div key={to} className="flex items-center space-x-2">
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                {last ? (
                  <span className="text-slate-900 dark:text-white font-bold">{displayName}</span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
