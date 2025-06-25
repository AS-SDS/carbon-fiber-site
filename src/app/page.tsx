export const metadata = {
  title: "Premium Carbon Fibre Manufacturer",
  description: "Premium Carbon Fiber Automotive Parts - Coming Soon",
  openGraph: {
    title: "Premium Carbon Fibre Manufacturer",
    description: "Premium Carbon Fiber Automotive Parts - Coming Soon",
    images: ["https://sheokanddesignstudio.com/carbon-fiber-bg.jpg"],
    url: "https://sheokanddesignstudio.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}