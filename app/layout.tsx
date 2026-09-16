import type { Metadata } from 'next';
import { Navigation } from '@/components/site/client';
import { Footer } from '@/components/site/footer';
import { site } from '@/content/site';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:'Ladder Point — The House of Ideas',template:'%s | Ladder Point'},description:'Strategic communications, storytelling and creative thinking. From Ideas to Impact. From Impact to Influence.',openGraph:{type:'website',siteName:site.name,title:'Ladder Point — The House of Ideas',description:site.tagline},twitter:{card:'summary_large_image'},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navigation/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:site.name,url:site.url,description:site.tagline,...(site.email?{email:site.email}:{})}).replace(/</g,'\\u003c')}}/></body></html>}
