import noImage from "../assets/Logo/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target);

  if (index === -1) return url; // Return original if no media/ found

  return (
    url.slice(0, index + target.length) +
    "crop/600/400/" +
    url.slice(index + target.length)
  );
};

export default getCroppedImageUrl;
