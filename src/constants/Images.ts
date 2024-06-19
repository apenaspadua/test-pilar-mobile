export const IMAGES: { [key: string]: any } = {
  IMDB: require('../../assets/images/imdb.png'),
  NO_IMAGE: require('../../assets/images/no-image.png'),
  TMBD: require('../../assets/images/tmdb.png'),
  WALLPAPER1: require('../../assets/images/wallpaper1.jpg'),
  WALLPAPER2: require('../../assets/images/wallpaper2.jpg'),
  WALLPAPER3: require('../../assets/images/wallpaper3.jpg'),
  WALLPAPER4: require('../../assets/images/wallpaper4.jpg'),
};

const IMAGE_KEYS = [
  'WALLPAPER1',
  'WALLPAPER2',
  'WALLPAPER3',
  'WALLPAPER4',
] as const;

type ImageKey = typeof IMAGE_KEYS[number];

export const getRandomImage = (): any => {
  const randomIndex = Math.floor(Math.random() * IMAGE_KEYS.length);
  const key: ImageKey = IMAGE_KEYS[randomIndex];
  return IMAGES[key];
};
