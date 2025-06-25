export const metadata = {
  title: "Premium Carbon Fibre Manufacturer",
  description: "Premium Carbon Fiber Automotive Parts - Coming Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Premium Carbon Fibre Manufacturer</title>
        <meta name="description" content="Premium Carbon Fiber Automotive Parts - Coming Soon" />
        <meta property="og:title" content="Premium Carbon Fibre Manufacturer" />
        <meta property="og:description" content="Premium Carbon Fiber Automotive Parts - Coming Soon" />
        <meta property="og:image" content="https://sheokanddesignstudio.com/carbon-fiber-bg.jpg" />
        <meta property="og:url" content="https://sheokanddesignstudio.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}