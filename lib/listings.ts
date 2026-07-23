export type AreaSlug = "njiro-ndogo" | "njiro-ndogo-2" | "intel-loti" | "mkonoo";

export const AREAS: { slug: AreaSlug; label: string }[] = [
  { slug: "njiro-ndogo", label: "Njiro Ndogo" },
  { slug: "njiro-ndogo-2", label: "Njiro Ndogo 2" },
  { slug: "intel-loti", label: "Intel Loti" },
  { slug: "mkonoo", label: "Mkonoo" },
];

export const AREA_IMAGES: Record<AreaSlug, string[]> = {
  "njiro-ndogo": [
    "DJI_20260722165827_0085_D.jpg",
    "DJI_20260722165834_0086_D.jpg",
    "DJI_20260722165858_0087_D.jpg",
    "DJI_20260722165913_0088_D.jpg",
    "DJI_20260722165929_0089_D.jpg",
    "DJI_20260722170000_0090_D.jpg",
    "DJI_20260722170016_0091_D.jpg",
  ].map((f) => `/images/njiro-ndogo/${f}`),
  "njiro-ndogo-2": [
    "DJI_20260722174903_0133_D.jpg",
    "DJI_20260722174913_0134_D.jpg",
    "DJI_20260722174922_0135_D.jpg",
    "DJI_20260722174937_0136_D.jpg",
    "DJI_20260722174953_0137_D.jpg",
    "DJI_20260722174955_0138_D.jpg",
    "DJI_20260722175035_0139_D.jpg",
    "DJI_20260722175117_0140_D.jpg",
    "DJI_20260722175131_0141_D.jpg",
    "DJI_20260722175144_0142_D.jpg",
  ].map((f) => `/images/njiro-ndogo-2/${f}`),
  "intel-loti": [
    "DJI_20260722171303_0092_D.jpg",
    "DJI_20260722171340_0094_D.jpg",
    "DJI_20260722171346_0095_D.jpg",
    "DJI_20260722171407_0097_D.jpg",
    "DJI_20260722171445_0098_D.jpg",
    "DJI_20260722171459_0099_D.jpg",
    "DJI_20260722171550_0101_D.jpg",
    "DJI_20260722171626_0104_D.jpg",
    "DJI_20260722171642_0105_D.jpg",
  ].map((f) => `/images/intel-loti/${f}`),
  mkonoo: [
    "DJI_20260722173416_0109_D.jpg",
    "DJI_20260722173608_0118_D.jpg",
    "DJI_20260722173633_0119_D.jpg",
    "DJI_20260722173634_0120_D.jpg",
    "DJI_20260722173731_0122_D.jpg",
    "DJI_20260722173746_0123_D.jpg",
    "DJI_20260722173903_0126_D.jpg",
    "DJI_20260722173915_0127_D.jpg",
    "DJI_20260722173949_0131_D.jpg",
  ].map((f) => `/images/mkonoo/${f}`),
};

export type Listing = {
  id: string;
  area: AreaSlug;
  loc: string;
  coords: string;
  name: string;
  size: string;
  dist: string;
  badge: string;
  image: string;
};

export const LISTINGS: Listing[] = [
  {
    id: "WL-NN-01",
    area: "njiro-ndogo",
    loc: "Njiro Ndogo, Arusha",
    coords: "S 03°24.12′ · E 36°43.08′",
    name: "Njiro Ndogo Gardens · Plot 01",
    size: "600 m²",
    dist: "8 km to CBD",
    badge: "Title-ready",
    image: "/images/njiro-ndogo/DJI_20260722165827_0085_D.jpg",
  },
  {
    id: "WL-NN-02",
    area: "njiro-ndogo",
    loc: "Njiro Ndogo, Arusha",
    coords: "S 03°24.15′ · E 36°43.14′",
    name: "Njiro Ndogo Gardens · Plot 06",
    size: "800 m²",
    dist: "8 km to CBD",
    badge: "Corner plot",
    image: "/images/njiro-ndogo/DJI_20260722165929_0089_D.jpg",
  },
  {
    id: "WL-NN2-01",
    area: "njiro-ndogo-2",
    loc: "Njiro Ndogo 2, Arusha",
    coords: "S 03°24.38′ · E 36°43.52′",
    name: "Njiro Ndogo 2 · Block B, Plot 03",
    size: "1,000 m²",
    dist: "9 km to CBD",
    badge: "Prime",
    image: "/images/njiro-ndogo-2/DJI_20260722174903_0133_D.jpg",
  },
  {
    id: "WL-NN2-02",
    area: "njiro-ndogo-2",
    loc: "Njiro Ndogo 2, Arusha",
    coords: "S 03°24.41′ · E 36°43.59′",
    name: "Njiro Ndogo 2 · Block B, Plot 09",
    size: "600 m²",
    dist: "9 km to CBD",
    badge: "New release",
    image: "/images/njiro-ndogo-2/DJI_20260722175117_0140_D.jpg",
  },
  {
    id: "WL-IL-01",
    area: "intel-loti",
    loc: "Intel Loti, Arusha",
    coords: "S 03°22.87′ · E 36°42.20′",
    name: "Intel Loti Rise · Plot 04",
    size: "700 m²",
    dist: "6 km to CBD",
    badge: "Title-ready",
    image: "/images/intel-loti/DJI_20260722171303_0092_D.jpg",
  },
  {
    id: "WL-IL-02",
    area: "intel-loti",
    loc: "Intel Loti, Arusha",
    coords: "S 03°22.91′ · E 36°42.27′",
    name: "Intel Loti Rise · Plot 11",
    size: "450 m²",
    dist: "6 km to CBD",
    badge: "Starter plot",
    image: "/images/intel-loti/DJI_20260722171445_0098_D.jpg",
  },
  {
    id: "WL-MK-01",
    area: "mkonoo",
    loc: "Mkonoo, Arusha",
    coords: "S 03°25.30′ · E 36°40.64′",
    name: "Mkonoo Fields · Plot 02",
    size: "1,200 m²",
    dist: "13 km to CBD",
    badge: "Corner plot",
    image: "/images/mkonoo/DJI_20260722173416_0109_D.jpg",
  },
  {
    id: "WL-MK-02",
    area: "mkonoo",
    loc: "Mkonoo, Arusha",
    coords: "S 03°25.34′ · E 36°40.71′",
    name: "Mkonoo Fields · Plot 08",
    size: "500 m²",
    dist: "13 km to CBD",
    badge: "Available",
    image: "/images/mkonoo/DJI_20260722173731_0122_D.jpg",
  },
];
