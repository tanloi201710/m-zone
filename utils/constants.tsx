import { BiMenuAltLeft, BiPlayCircle, BiSearchAlt2 } from "react-icons/bi";
import {
  MdFavoriteBorder,
  MdList,
  MdPortrait,
  MdQueueMusic,
  MdTrendingUp,
} from "react-icons/md";
export const mains = [
  {
    name: "Discover",
    icon: <BiPlayCircle size={18} />,
  },
  {
    name: "Browse",
    icon: <BiMenuAltLeft size={18} />,
  },
  {
    name: "Charts",
    icon: <MdTrendingUp size={18} />,
  },
  {
    name: "Artist",
    icon: <MdPortrait size={18} />,
  },
  {
    name: "Search",
    icon: <BiSearchAlt2 size={18} />,
  },
];

export const collections = [
  {
    name: "Tracks",
    icon: <MdList size={18} />,
  },
  {
    name: "Playlists",
    icon: <MdQueueMusic size={18} />,
  },
  {
    name: "Likes",
    icon: <MdFavoriteBorder size={18} />,
  },
];

export const albums = [
  {
    name: "I Wanna Be In the Cavalry",
    artist: "John Doe",
    image: "album10.jpg",
  },
  {
    name: "Album 2",
    artist: "Jack Sparow",
    image: "album11.jpg",
  },
  {
    name: "Album 3",
    artist: "Kevin Smith",
    image: "album12.jpg",
  },
  {
    name: "Album 4",
    artist: "Victoria",
    image: "album13.jpg",
  },
  {
    name: "Album 5",
    artist: "Laura Swift",
    image: "album14.jpg",
  },
  {
    name: "Album 6",
    artist: "Kevin Smith",
    image: "album15.jpg",
  },
  {
    name: "Album 7",
    artist: "Victoria",
    image: "album16.jpg",
  },
  {
    name: "Album 8",
    artist: "Laura Swift",
    image: "album17.jpg",
  },
];

export const likes = [
  {
    name: "Album 4",
    artist: "Victoria",
    image: "album10.jpg",
  },
  {
    name: "Album 5",
    artist: "Laura Swift",
    image: "album11.jpg",
  },
  {
    name: "Album 6",
    artist: "Kevin Smith",
    image: "album12.jpg",
  },
  {
    name: "Album 7",
    artist: "Victoria",
    image: "album13.jpg",
  },
  {
    name: "Album 8",
    artist: "Laura Swift",
    image: "album14.jpg",
  },
];
