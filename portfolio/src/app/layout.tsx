import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Mason Drake | Portfolio",
  description: "Personal portfolio website showcasing my work and experience",
  keywords: ["portfolio", "developer", "software engineer", "web development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Preload script to prevent flash of unstyled content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-full flex flex-col">
        <ThemeProvider>
          <Navigation />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="mt-auto py-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Mason Drake. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
