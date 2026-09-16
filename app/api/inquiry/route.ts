import { deliver } from '@/lib/form-delivery';
export async function POST(request:Request){return deliver(request,'inquiry')}
