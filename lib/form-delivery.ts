import { z } from 'zod';
import { NextResponse } from 'next/server';
const text = z.string().trim().max(200);
const inquiry = z.object({name:text.min(1),organization:text.optional(),email:z.string().trim().email().max(254),phone:text.optional(),service:text.min(1),challenge:z.string().trim().min(1).max(10000),timeline:text.optional(),budget:text.optional(),website:z.string().max(200).optional()});
const newsletter = z.object({email:z.string().trim().email().max(254)});
export async function deliver(request:Request,kind:'inquiry'|'newsletter'){
 const origin=request.headers.get('origin');
 const allowed=process.env.NEXT_PUBLIC_SITE_URL;
 if(origin && allowed && origin!==new URL(allowed).origin)return NextResponse.json({message:'Please submit this form from our website.'},{status:403});
 if(Number(request.headers.get('content-length')||0)>32768)return NextResponse.json({message:'Your message is too long. Please shorten it.'},{status:413});
 let body:unknown;try{const raw=await request.text();if(raw.length>32768)return NextResponse.json({message:'Your message is too long.'},{status:413});body=JSON.parse(raw)}catch{return NextResponse.json({message:'Please check your form and try again.'},{status:400})}
 const result=(kind==='inquiry'?inquiry:newsletter).safeParse(body);
 if(!result.success)return NextResponse.json({message:'Please check the required fields and enter a valid email address.'},{status:400});
 if('website' in result.data && result.data.website)return NextResponse.json({message:'Unable to accept this submission.'},{status:400});
 const target=kind==='inquiry'?process.env.INQUIRY_WEBHOOK_URL:process.env.NEWSLETTER_WEBHOOK_URL;
 if(!target)return NextResponse.json({message:kind==='inquiry'?'The inquiry form is not accepting messages yet. Please use the contact details listed, or try again later.':'Newsletter signup is not open yet. Please check back soon.'},{status:503});
 try{const res=await fetch(target,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.FORM_WEBHOOK_TOKEN?{'Authorization':`Bearer ${process.env.FORM_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify({type:kind,...result.data,submittedAt:new Date().toISOString()}),signal:AbortSignal.timeout(10000)});if(!res.ok)throw new Error('Delivery failed');return NextResponse.json({message:kind==='inquiry'?'Your inquiry has been received.':'Thank you. You’re on the list.'})}catch{return NextResponse.json({message:'We could not deliver your submission. Please try again later.'},{status:502})}
}
