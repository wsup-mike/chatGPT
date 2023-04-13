import SideBar from '@/components/SideBar';
import '@/styles/globals.css';
import { getServerSession } from 'next-auth';


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
          <div className='bg-[#202123] max-w-xs md:min-w-[11rem] overflow-y-auto'>
            <SideBar />
          </div>
          {/* ClientProvider - Notifications  */}
          <div className='bg-[#343541] flex-1'>{children}</div>
        </div>  
      </body>
    </html>
  )
}
