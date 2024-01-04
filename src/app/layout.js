import Footer from "./components/Footer/page";
import Header from "./components/Header/page";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.jpg" />



        <meta charSet="UTF-8" />
        <title>JasGiigli - Code Learning Platform</title>

        <meta name="description" content="Master coding with ease. Interactive tutorials, exercises, and quizzes for developers." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Other necessary meta tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Add Open Graph meta tags for better social media sharing */}
        <meta property="og:title" content="JasGiigli - Code Learning Platform" />
        <meta property="og:description" content="Master coding with ease. Interactive tutorials, exercises, and quizzes for developers." />
        <meta property="og:image" content="/JasGiigli.jpg" />
        <meta property="og:url" content="https://jasgiigliapp.vercel.app" />
        <meta property="og:type" content="website" />
        {/* Add Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JasGiigli - Code Learning Platform" />
        <meta name="twitter:description" content="Master coding with ease. Interactive tutorials, exercises, and quizzes for developers." />
        <meta name="twitter:image" content="/JasGiigli.jpg" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
