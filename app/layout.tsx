import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Sistema Operacional de Inteligência de Clientes', description: 'Sistema especialista de Operações de Sucesso do Cliente e Inteligência de Receita' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html> }
