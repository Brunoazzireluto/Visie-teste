'use client';
import Link from "next/link";



export default async function Index(people) {
  const id = people.params['id'] // pegando o id do registro
  //função que faz o resgate desses dados
  const getData = async () => {
    const res = await fetch("http://127.0.0.1:8000/people/"+id);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
     
    return await res.json();
  }
  const data = await getData();
    return (
    <div className="container mx-auto py-10 flex justify-center h-screen">
        <div className="w-4/6  border border-gray-600 bg-gray-400 rounded-md flex flex-col">
            <div className="w-4/4 border-b border-b-red-700 h-[8%] flex flex-row items-center justify-center">
              <h1 className="text-lg justify-self-center self-center">Vizualizar dados</h1>
            </div>
            <form className="mx-3 my-6 p-4 flex flex-col justify-center items-center">             
            <div className="flex flex-row m-4">
              <label className="text-lg font-bold">Nome Completo: </label>
              <p  className="text-lg mx-4">{data.nome}</p>
            </div>
            <div className="flex flex-row m-4">
              <label className="text-lg font-bold">RG</label>
              <p className="text-lg mx-4">{data.rg}</p>
            </div>
            <div className="flex flex-row m-4">
              <label className="text-lg font-bold">CPF</label>
              <p className="text-lg mx-4">{data.cpf}</p>
            </div>
            <div className="flex flex-row m-4">
              <label className="text-lg font-bold">Data de Nascimento</label>
              <p className="text-lg mx-4">{data.data_nascimento}</p>
            </div>
            <div className="flex flex-row m-4">
              <label className="text-lg font-bold">Data de Admissão</label>
              <p className="text-lg mx-4">{data.data_admissao}</p>
            </div>
            <div className="flex flex-row m-4">
              <label className="text-lg font-bold">Função</label>
              <p className="text-lg mx-4">{data.funcao}</p>
            </div>
            </form>
        </div>
        <div className=" m-8 p-4  self-center flex flex-col justify-around items-center">
      <Link className="rounded border border-red-700 m-3 p-2
        justify-self-center	 self-end hover:bg-red-700 
        hover:shadow-lg hover:shadow-red-700 hover:text-white 
         hover: transition-shadow hover:scale-105 
        ease-linear duration-300 text-center cursor-pointer w-[80%]" href="/" >Voltar</Link>
      </div>
    </div>
    )
} 