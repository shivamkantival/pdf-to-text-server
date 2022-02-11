export enum PLATFORM_MEDIA_TYPES {
  PDF = 'pdf',
}

export interface MediaObject {
  id: string;
  type: PLATFORM_MEDIA_TYPES;
  path: string;
}
