"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Track } from "./music-player";
import { Progress } from "@/components/ui/progress";

interface TrackListProps {
  tracks: Track[];
}

export function TrackList({ tracks }: TrackListProps) {
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<{ [key: string]: number }>({});
  const [durations, setDurations] = useState<{ [key: string]: number }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  // Set up event listeners for each audio element
  useEffect(() => {
    const audioElements = audioRefs.current;

    const handleTimeUpdate = (trackId: string) => {
      const audio = audioElements[trackId];
      if (audio) {
        setCurrentTime((prev) => ({ ...prev, [trackId]: audio.currentTime }));
      }
    };

    const handleLoadedMetadata = (trackId: string) => {
      const audio = audioElements[trackId];
      if (audio) {
        setDurations((prev) => ({ ...prev, [trackId]: audio.duration }));
      }
    };

    const handleEnded = (trackId: string) => {
      setPlayingTrackId(null);
      setCurrentTime((prev) => ({ ...prev, [trackId]: 0 }));
    };

    // Attach event listeners to all audio elements
    Object.keys(audioElements).forEach((trackId) => {
      const audio = audioElements[trackId];
      if (audio) {
        audio.addEventListener("timeupdate", () => handleTimeUpdate(trackId));
        audio.addEventListener("loadedmetadata", () =>
          handleLoadedMetadata(trackId)
        );
        audio.addEventListener("ended", () => handleEnded(trackId));
      }
    });

    // Cleanup
    return () => {
      Object.keys(audioElements).forEach((trackId) => {
        const audio = audioElements[trackId];
        if (audio) {
          audio.removeEventListener("timeupdate", () =>
            handleTimeUpdate(trackId)
          );
          audio.removeEventListener("loadedmetadata", () =>
            handleLoadedMetadata(trackId)
          );
          audio.removeEventListener("ended", () => handleEnded(trackId));
        }
      });
    };
  }, [tracks]);

  // Handle play/pause state changes
  useEffect(() => {
    Object.entries(audioRefs.current).forEach(([trackId, audio]) => {
      if (!audio) return;

      if (playingTrackId === trackId) {
        // Ensure this track is playing
        if (audio.paused) {
          audio.play().catch((error) => {
            console.error("Error playing audio:", error);
            setPlayingTrackId(null);
          });
        }
      } else {
        // Pause all other tracks
        if (!audio.paused) {
          audio.pause();
        }
      }
    });
  }, [playingTrackId]);

  // Cleanup on unmount
  useEffect(() => {
    const audioRefsCopy = audioRefs.current;
    return () => {
      Object.values(audioRefsCopy).forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.src = "";
        }
      });
    };
  }, []);

  const togglePlay = (trackId: string) => {
    const audio = audioRefs.current[trackId];
    if (!audio) return;

    // Pause all other tracks
    Object.entries(audioRefs.current).forEach(([id, a]) => {
      if (id !== trackId && a) {
        a.pause();
      }
    });

    if (playingTrackId === trackId) {
      // Pause current track
      audio.pause();
      setPlayingTrackId(null);
    } else {
      // Play selected track
      audio.play();
      setPlayingTrackId(trackId);
    }
  };

  const handleTimeUpdate = (trackId: string, time: number) => {
    setCurrentTime((prev) => ({ ...prev, [trackId]: time }));
  };

  const handleLoadedMetadata = (trackId: string, duration: number) => {
    setDurations((prev) => ({ ...prev, [trackId]: duration }));
  };

  const handleEnded = (trackId: string) => {
    setPlayingTrackId(null);
    setCurrentTime((prev) => ({ ...prev, [trackId]: 0 }));
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleProgressClick = (
    e: React.MouseEvent<HTMLDivElement>,
    trackId: string
  ) => {
    const audio = audioRefs.current[trackId];
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const duration = durations[trackId] || 0;
    const clickRatio = clickX / width;
    const newTime = clickRatio * duration;

    audio.currentTime = newTime;
    setCurrentTime((prev) => ({ ...prev, [trackId]: newTime }));
  };

  return (
    <div className="space-y-4">
      {tracks.map((track) => {
        const isPlaying = playingTrackId === track.id;
        const time = currentTime[track.id] || 0;
        const duration = durations[track.id] || 0;
        const progressPercentage = duration > 0 ? (time / duration) * 100 : 0;

        return (
          <div
            key={track.id}
            className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start">
              {/* Cover Art or Placeholder */}
              <div className="relative w-full md:w-24 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0">
                {track.cover ? (
                  <Image
                    src={track.cover}
                    alt={track.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Track Info and Controls */}
              <div className="flex-1 w-full min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/music/${track.id}`}
                      className="block group"
                      onClick={(e) => {
                        // Don't navigate if clicking on play button area
                        if ((e.target as HTMLElement).closest("button")) {
                          e.preventDefault();
                        }
                      }}
                    >
                      <h3 className="font-semibold text-lg mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-muted-foreground text-sm truncate">
                        {track.artist}
                      </p>
                    </Link>
                  </div>

                  {/* Play/Pause Button */}
                  <button
                    onClick={() => togglePlay(track.id)}
                    className="flex-shrink-0 p-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Progress Bar - Show if playing or if track has been played (has time or duration) */}
                {(isPlaying || time > 0 || duration > 0) && (
                  <div className="space-y-2">
                    <div
                      className="cursor-pointer"
                      onClick={(e) => handleProgressClick(e, track.id)}
                    >
                      <Progress value={progressPercentage} />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{formatTime(time)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                )}

                {/* Duration (when track hasn't been played yet) */}
                {!isPlaying && time === 0 && duration === 0 && track.duration && (
                  <p className="text-xs text-muted-foreground mt-2">
                    {track.duration}
                  </p>
                )}
              </div>
            </div>

            {/* Hidden Audio Element */}
            <audio
              ref={(el) => {
                audioRefs.current[track.id] = el;
              }}
              src={track.src}
              preload="metadata"
              onTimeUpdate={(e) =>
                handleTimeUpdate(track.id, e.currentTarget.currentTime)
              }
              onLoadedMetadata={(e) =>
                handleLoadedMetadata(track.id, e.currentTarget.duration)
              }
              onEnded={() => handleEnded(track.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
