export type PlotStatus = "available" | "reserved" | "sold";

export type Plot = {
  id: string;
  name: string;
  size: string;
  status: PlotStatus;
  x: number;
  y: number;
  w: number;
  h: number;
};

export const PLOTS: Plot[] = [
  { id: "WL-A-01", name: "Njiro Ndogo A-01", size: "600 m²", status: "available", x: 8, y: 14, w: 52, h: 78 },
  { id: "WL-A-02", name: "Njiro Ndogo A-02", size: "600 m²", status: "reserved", x: 64, y: 14, w: 52, h: 78 },
  { id: "WL-A-03", name: "Njiro Ndogo A-03", size: "800 m²", status: "available", x: 120, y: 14, w: 66, h: 78 },
  { id: "WL-A-04", name: "Njiro Ndogo A-04", size: "800 m²", status: "sold", x: 190, y: 14, w: 66, h: 78 },
  { id: "WL-A-05", name: "Njiro Ndogo A-05 (corner)", size: "450 m²", status: "available", x: 260, y: 14, w: 34, h: 78 },
  { id: "WL-A-06", name: "Njiro Ndogo A-06", size: "1,000 m²", status: "available", x: 8, y: 118, w: 76, h: 78 },
  { id: "WL-A-07", name: "Njiro Ndogo A-07", size: "600 m²", status: "available", x: 88, y: 118, w: 52, h: 78 },
  { id: "WL-A-08", name: "Njiro Ndogo A-08", size: "600 m²", status: "reserved", x: 144, y: 118, w: 52, h: 78 },
  { id: "WL-A-09", name: "Njiro Ndogo A-09", size: "750 m²", status: "sold", x: 200, y: 118, w: 60, h: 78 },
  { id: "WL-A-10", name: "Njiro Ndogo A-10 (corner)", size: "500 m²", status: "available", x: 264, y: 118, w: 30, h: 78 },
];
