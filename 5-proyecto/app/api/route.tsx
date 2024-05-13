import { Comments } from '@/app/types/types';

export async function GET() {
    const res = await fetch('https://66297c6b67df268010a0df12.mockapi.io/services/proy5');
    const data = await res.json();
    return data
  }
  
  export async function POST(newComment: Partial<Comments>) {
    const res = await fetch('https://66297c6b67df268010a0df12.mockapi.io/services/proy5', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    });
    const data = await res.json();
    return data;
  }
  