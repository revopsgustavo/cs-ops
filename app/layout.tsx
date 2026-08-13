import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Customer Intelligence OS', description: 'Sistema especialista de CS Operations e Revenue Intelligence' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html> }
