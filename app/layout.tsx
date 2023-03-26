import '@/styles/globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className='flex'>
          {/* Sidebar */}
          {/* ClientProvider - Notifications  */}
          
          <div className='bg-[#343541] flex-1'>{children}</div>
        </div>  
      </body>
    </html>
  )
}
