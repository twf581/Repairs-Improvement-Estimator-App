import "./globals.css";

export const metadata = {
  title: "Repair Estimator App",
  description: "Mobile Onsite Handyman Services"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
