import { Avatar } from "@mui/material";

const getRandomImage = () => {
  const baseUrl = "https://source.unsplash.com/random?wallpapers";
  const timestamp = new Date().getTime();
  return `${baseUrl}&timestamp=${timestamp}`;
};

const RandomAvatar = () => {
  const randomImage = getRandomImage();

  return <Avatar variant="rounded" alt="Random Avatar" src={randomImage} />;
};

export default RandomAvatar;
