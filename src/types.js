// @flow

type ImageType = {
  id: string,
};

type DetailsType = {
  architect: string,
  ceilHeight: {
    from: number,
    to: number,
  },
  commissioningQuarter: string,
  commissioningYear: number,
  constructionKind: string,
  developer: string,
  maintenanceCosts: string,
  parkings: number,
  security: string,
  startYear: number,
  startQuarter: string,
  undergroundGarages?: number,
};

type LocationType = {
  subLocalityName: string,
  street: string,
  house: string,
  postalCode: string,
};

type StatisticsType = {
  propertiesCount: number,
  totalArea: {
    from: number,
    to: number,
  },
  price: {
    from: {
      rub: number,
    },
    to: {
      rub: number,
    },
  },
};

type AmenityType = {
  name: string,
};

type ComplexType = {
  id: number,
  name: string,
  slug: string,
  images: Array<ImageType>,
  image: ImageType,
  details: DetailsType,
  location: LocationType,
  statistics: StatisticsType,
  units: number,
  amenities: Array<AmenityType>,
  amenity: string,
  shortDescription: string,
  fullDescription: string,
};

export type { ImageType, LocationType, AmenityType, ComplexType };
