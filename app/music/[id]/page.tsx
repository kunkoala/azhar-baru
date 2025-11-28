import { Page } from "@/components/Page";
import TrackScreen from "./music-screen";

export default async function TrackPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Page>
      <TrackScreen id={id} />
    </Page>
  );
}
