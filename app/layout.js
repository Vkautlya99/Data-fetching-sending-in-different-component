
import "./globals.css";



export const metadata = {
  title: "Next.js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body suppressHydrationWarning>

        
        {children}
        
      </body>
    </html>
  );
}
