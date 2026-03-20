export default function sitemap() {
  const baseUrl = "https://three-angels-message.vercel.app";

  return [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/bible`, priority: 0.9 },
    { url: `${baseUrl}/studies`, priority: 0.9 },
    { url: `${baseUrl}/books`, priority: 0.9 },
    { url: `${baseUrl}/support`, priority: 0.8 },
  ];
}
