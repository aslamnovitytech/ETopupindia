import { Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Etopup India - India\'s Simplest Fintech Platform',
  description: 'One Wallet. All Services. Zero Confusion.',
}

export default function RootLayout({ children }) {
  return (
     <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
