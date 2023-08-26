export interface ZingArtist {
  id: string;
  name: string;
  link: string;
  spotlight: boolean;
  alias: string;
  thumbnail: string;
  thumbnailM: string;
  isOA: boolean;
  isOABrand: boolean;
  playlistId: string;
  totalFollow?: number;
}

export interface ZingAlbum {
  encodeId: string;
  title: string;
  thumbnail: string;
  isoffical: boolean;
  link: string;
  isIndie: boolean;
  releaseDate: string;
  sortDescription: string;
  genreIds: string[];
  PR: boolean;
  artists: ZingArtist[];
  artistsNames: string;
}

export interface ZingSong {
  encodeId: string;
  title: string;
  alias: string;
  isOffical: boolean;
  username: string;
  artistsNames: string;
  artists: ZingArtist[];
  isWorldWide: boolean;
  thumbnailM: string;
  link: string;
  thumbnail: string;
  duration: number;
  zingChoice: boolean;
  isPrivate: boolean;
  preRelease: boolean;
  releaseDate: number;
  genreIds: string[];
  album: ZingAlbum;
  distributor: string;
  isIndie: boolean;
  streamingStatus: number;
  allowAudioAds: boolean;
  hasLyric: boolean;
  rakingStatus: number;
  score: number;
}
