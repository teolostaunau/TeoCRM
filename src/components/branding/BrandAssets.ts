export interface BrandImageAsset {
  primary: string;
  fallback: string;
}

export interface BrandAssetsType {
  logo: {
    horizontal: BrandImageAsset;
    vertical: BrandImageAsset;
  };

  icon: BrandImageAsset;

  favicon: {
    svg: string;
    ico: string;
  };
}

export const BrandAssets: BrandAssetsType = {
  logo: {
    horizontal: {
      primary: "/brand/svg/logo-horizontal.svg",
      fallback: "/brand/png/logo-horizontal.png",
    },

    vertical: {
      primary: "/brand/svg/logo-vertical.svg",
      fallback: "/brand/png/logo-vertical.png",
    },
  },

  icon: {
    primary: "/brand/svg/isotipo.svg",
    fallback: "/brand/png/isotipo.png",
  },

  favicon: {
    svg: "/brand/svg/favicon.svg",
    ico: "/favicon.ico",
  },
};