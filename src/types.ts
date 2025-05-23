export const Pages = {
  shuffle: "Shuffle",
  imageCarousel: "Image Carousel",
} as const;

export type Pages = (typeof Pages)[keyof typeof Pages];
