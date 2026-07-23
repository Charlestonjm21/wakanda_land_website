export type AreaSlug = "njiro-ndogo" | "njiro-ndogo-2" | "intel-loti" | "mkonoo";

export const AREAS: { slug: AreaSlug; label: string }[] = [
  { slug: "njiro-ndogo", label: "Njiro Ndogo" },
  { slug: "njiro-ndogo-2", label: "Njiro Ndogo 2" },
  { slug: "intel-loti", label: "Intel Loti" },
  { slug: "mkonoo", label: "Mkonoo" },
];

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
