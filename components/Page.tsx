export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-foreground min-h-[60vh] w-full flex flex-col">
      {children}
    </div>
  );
}
