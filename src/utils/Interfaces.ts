export interface Vegetable {
  name: string;
  companions: string[];
  incompatibles: string[];
  control: string[];
  specifications: Specifications;
  image: string;
}

export interface Specifications {
  plantingSeason: string;
  harvest: string;
  lightRequirement: string;
  irrigation: string;
  soil: string;
  hardiness: string;
  lifeCycle: string;
  seedsPerHole: number;
  plantSpacing: number;
  rowSpacing: number;
}
