interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-zinc-900 text-white relative overflow-hidden pb-16">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">{title}</h1>
          {description && (
            <p className="text-xl text-zinc-200 max-w-3xl font-medium leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
} 