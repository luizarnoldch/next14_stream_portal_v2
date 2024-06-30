export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="min-h-screen px-6 py-8 flex justify-center items-center">
      <aside className="rounded-3xl w-screen">
        {children}
      </aside>
    </section>
  )
}
