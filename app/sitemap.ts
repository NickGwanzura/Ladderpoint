import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
export default function sitemap():MetadataRoute.Sitemap{return ['','/expertise','/experience','/packages','/about','/insights','/contact'].map(path=>({url:`${site.url}${path}`,changeFrequency:'monthly',priority:path?0.8:1}))}
