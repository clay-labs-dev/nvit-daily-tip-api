export default async function handler(req, res) {
  const tip = {
    image_url: "https://nvit-cdn.vercel.app/tip.jpg",
    caption: "NVIT Cyber Tip: Always verify the sender before opening attachments.",
    hashtags: "#NVIT #CyberSecurity #SouthAfrica #TechTips"
  };

  res.status(200).json(tip);
}
