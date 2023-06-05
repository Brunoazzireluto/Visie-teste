import Link from 'next/link';
import moment from 'moment';
import PersonItem from "./PersonItem";

// export async function getStaticProps() {
//     const maxPeople = 25;
//     const api = 'http://127.0.0.1:8000/people/';
//     const response = await fetch(`${api}?limit=${maxPeople}`);
//     const data = await response.json();
//     console.log(data)
//     data.results.forEach((item, index) => {
//       item.id = index + 1;
//     });
    
//     return {
//       props: {
//         peoples: data.results,
//       }
//     }
//}

async function getData() {
    const res = await fetch("http://127.0.0.1:8000/people/");

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
}
   

export default async function PersonList() {
    const data = await getData();
    console.log(data)
    return (
        <div className="w-5/6  border border-gray-600 bg-gray-400 rounded-md flex flex-col">
            <div className="w-4/4 border-b border-b-red-700 h-[8%] flex flex-row items-center justify-center">
                <h1 className="text-lg justify-self-center self-center">Lista de Pessoas</h1>
            </div>
            <Link className="rounded border border-red-700 m-3  p-2 w-[20%] 
            justify-self-center	 self-end hover:bg-red-700 
            hover:shadow-lg hover:shadow-red-700 hover:text-white 
            hover: transition-shadow hover:scale-105 
            ease-linear duration-300 text-center cursor-pointer" href="/new-people" >Adicionar novo registro</Link>
            <div className="p-4 mt-2 h-4/4 flex flex-col overflow-y-scroll overflow-x-hidden">
                <table className="min-w-full text-center bg-gray-300 rounded-lg">
                    <thead className="border-b font-medium border-b-red-700 text-red-700 rounded-lg">
                    <tr className=" flex items-center justify-around text-lg">
                        <th className="py-2">Nome</th>
                        <th className="py-2">Data de Admissão</th>
                        <th className="py-2">Ver mais</th>
                        <th className="py-2">Editar</th>
                        <th className="py-2">Excluir</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((people) => (
                        <PersonItem key={people.id_pessoa} name={people.nome.split(" ", 1)} birth={moment(people.data_nascimento).format('DD/MM/YYYY')}  />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
