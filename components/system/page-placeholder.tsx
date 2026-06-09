type PagePlaceholderProps = {
  title: string;
};

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
      <header className="border-b border-neutral-200 pb-5">
        <h1 className="text-2xl font-semibold text-neutral-950">{title}</h1>
      </header>
    </div>
  );
}
