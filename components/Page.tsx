export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-foreground min-h-screen w-full flex flex-col">
      {children}
    </div>
  );
}
