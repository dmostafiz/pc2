import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Paid Creators 2",
  description: "A platform for creators to monetize their content",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,200,300,400,500,600,700,800,900%7CRoboto:100,200,300,400,500,600,700,800,900%7COpen%20Sans:100,200,300,400,500,600,700,800,900%7CMontserrat:100,200,300,400,500,600,700,800,900%7CRubik:100,200,300,400,500,600,700,800,900%7COutfit:100,200,300,400,500,600,700,800,900%7CSpace%20Grotesk:100,200,300,400,500,600,700,800,900%7CPinyon%20Script:100,200,300,400,500,600,700,800,900%7CBad%20Script:100,200,300,400,500,600,700,800,900%7CDancing%20Script:100,200,300,400,500,600,700,800,900%7CMarck%20Script:100,200,300,400,500,600,700,800,900%7CVujahday%20Script:100,200,300,400,500,600,700,800,900%7CStyle%20Script:100,200,300,400,500,600,700,800,900%7CSeaweed%20Script:100,200,300,400,500,600,700,800,900%7CRedacted%20Script:100,200,300,400,500,600,700,800,900%7CNova%20Script:100,200,300,400,500,600,700,800,900%7CMeie%20Script:100,200,300,400,500,600,700,800,900%7CKarla:100,200,300,400,500,600,700,800,900%7CIBM%20Plex%20Sans:100,200,300,400,500,600,700,800,900%7CPoppins:100,200,300,400,500,600,700,800,900%7CPlus%20Jakarta%20Sans:100,200,300,400,500,600,700,800,900%7CRoboto:100,200,300,400,500,600,700,800,900&amp;display=swap" media="all" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
