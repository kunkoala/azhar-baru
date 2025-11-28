import { Page } from "@/components/Page";
import { TrackList } from "@/components/track-list";
import { getTracks } from "./utils";

export default function MusicPage() {
  const tracks = getTracks();

  return (
    <Page>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        Music & Art
      </h1>
      {tracks.length > 0 ? (
        <TrackList tracks={tracks} />
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            No tracks available yet. Add your music files to get started.
          </p>
          <p className="text-sm text-muted-foreground">
            Edit{" "}
            <code className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">
              app/music/utils.ts
            </code>{" "}
            to add your tracks.
          </p>
        </div>
      )}
    </Page>
  );
}
