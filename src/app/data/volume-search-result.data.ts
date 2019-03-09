import { VolumeData } from './volume.data';

export interface VolumeSearchResultData {
    kind: string;
    totalItems: number;
    items?: (VolumeData)[] | null;
}
  