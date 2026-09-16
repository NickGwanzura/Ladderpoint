import { ImageResponse } from 'next/og';
export const alt='Ladder Point — The House of Ideas';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%',height:'100%',background:'#40376E',color:'#FFFDF4',padding:80}}><div style={{fontSize:20,letterSpacing:5,marginBottom:40}}>LADDER POINT</div><div style={{fontFamily:'serif',fontSize:100}}>The House of Ideas</div><div style={{fontSize:26,color:'#36558F',marginTop:35}}>From Ideas to Impact. From Impact to Influence.</div></div>,size)}
