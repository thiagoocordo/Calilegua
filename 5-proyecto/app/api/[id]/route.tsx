export async function GET({params}:{params:{id : number}}) {
    const { id } = params; 
    const res = await fetch(`https://66297c6b67df268010a0df12.mockapi.io/services/proy5/${id}`);
    const data = await res.json();
    return data;
    
}