export default function MoviesLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        
        <nav></nav>
   
        {children}
      </section>
    )
  }