export const Pages = {
  Shuffle: "Shuffle",
  ImageCarousel: "Image Carousel",
} as const;

export type Pages = (typeof Pages)[keyof typeof Pages];
