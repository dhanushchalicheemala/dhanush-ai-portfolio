export const metadata = {
  title: 'Dhanush Chalicheemala - AI Portfolio',
  description: 'Data Scientist | Machine Learning Engineer | AI Researcher',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        {children}
      </body>
    </html>
  )
}
