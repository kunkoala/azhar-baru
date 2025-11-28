"use client";

import { useState, useRef, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getTrack } from "../utils";
import { Progress } from "@/components/ui/progress";

export default function TrackScreen({ id }: { id: string }) {
  const [track, setTrack] = useState<ReturnType<typeof getTrack>>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    async function loadTrack() {
      const foundTrack = getTrack(id);
      if (!foundTrack) {
        notFound();
      }
      setTrack(foundTrack);
    }
    loadTrack();
  }, [id]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [track]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickRatio = clickX / width;
    const newTime = clickRatio * duration;

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleShare = async () => {
    if (!track) return;

    const shareUrl = `${window.location.origin}/music/${track.id}`;
    const shareText = `Check out "${track.title}" by ${track.artist}`;

    // Try Web Share API first
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${track.title} by ${track.artist}`,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Error sharing:", error);
        }
      }
    }

    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!track) {
    return null; // Loading or not found
  }

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* Back to Music */}
      <div className="mb-8">
        <Link
          href="/music"
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Music
        </Link>
      </div>

      <article className="max-w-2xl mx-auto">
        {/* Track Cover */}
        <div className="mb-8">
          {track.cover ? (
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <Image
                src={track.cover}
                alt={track.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <svg
                className="w-32 h-32 text-white opacity-50"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
            </div>
          )}
        </div>

        {/* Track Info */}
        <div className="mb-8 text-center">
          <h1 className="font-bold text-3xl mb-2 tracking-tighter">
            {track.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{track.artist}</p>

        {/* Player Controls */}
        <div className="space-y-6">
          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={togglePlayPause}
              className="p-4 rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              onClick={handleShare}
              className="p-3 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Share track"
              title={copied ? "Copied!" : "Share"}
            >
              {copied ? (
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Progress Bar */}
          {(isPlaying || currentTime > 0 || duration > 0) && (
            <div className="space-y-2 max-w-md mx-auto">
              <div className="cursor-pointer" onClick={handleProgressClick}>
                <Progress value={progressPercentage} />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          )}

          {/* Duration (when not playing) */}
          {!isPlaying &&
            currentTime === 0 &&
            duration === 0 &&
            track.duration && (
              <p className="text-sm text-muted-foreground">{track.duration}</p>
            )}
        </div>
        </div>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} src={track.src} preload="metadata" />
      </article>
    </>
  );
}
