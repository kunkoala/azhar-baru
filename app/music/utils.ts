import { Track } from "@/components/music-player";

export const tracks: Track[] = [
  {
    id: "1",
    title: "Adventure Time",
    artist: "Azhar Rahadian",
    src: "/music/adventure_time_more.wav", // Place your audio files in public/music/
    cover: "/music/cover1.jpg", // Optional: Place cover images in public/music/
    duration: "5:05",
  },
  {
    id: "2",
    title: "Example Track 2",
    artist: "Another Artist",
    src: "/music/track2.mp3",
    cover: "/music/cover2.jpg",
    duration: "4:20",
  },
  // Add more tracks here
  // You can also use external URLs:
  // {
  //   id: "3",
  //   title: "External Track",
  //   artist: "External Artist",
  //   src: "https://example.com/audio.mp3",
  //   duration: "5:00",
  // },
];

export function getTracks(): Track[] {
  return tracks;
}

export function getTrack(id: string): Track | undefined {
  return tracks.find((track) => track.id === id);
}

