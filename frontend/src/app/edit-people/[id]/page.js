'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default async function Index(people) {
  const router = useRouter()
  const id = people.params['id']
  //função para pegar os dados daquele registro e jogar nos campos editaveis
  const getData = async () => {
    const res = await fetch("http://127.0.0.1:8000/people/"+id);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
     
    return await res.json();
  }
  const data = await getData();

  //função para dar update no registro
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      nome: event.target.nome.value,
      rg: event.target.rg.value,
      cpf: event.target.cpf.value,
      data_nascimento: event.target.data_nascimento.value,
      data_admissao: event.target.data_admissao.value,
      funcao: event.target.funcao.value
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "http://127.0.0.1:8000/people/"+id
    const options = {
      method: "PUT",
      Headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert("Cadastro Atualizado")
    router.push("/")
  }

  return (
    <div className="container mx-auto py-10 flex justify-center h-screen">
      <div className="w-4/6  border border-gray-600 bg-gray-400 rounded-md flex flex-col">
          <div className="w-4/4 border-b border-b-red-700 h-[8%] flex flex-row items-center justify-center">
            <h1 className="text-lg justify-self-center self-center">Editar pessoa</h1>
          </div>
          <form className="mx-3 my-6 p-4 flex flex-col" onSubmit={handleSubmit}>        
            <div className="flex flex-col my-2">
              <label for="nome">Nome Completo</label>
              <input
                  type="text" name="nome" required
              className=" p-1" defaultValue={`${data.nome}`}  />
            </div>
            <div className="flex flex-col my-2">
              <label for="rg">RG</label>
              <input
                  type="text" name="rg" required
                  className=" p-1" defaultValue={data.rg}/>
            </div>     
            <div className="flex flex-col my-2">
              <label for="cpf">CPF</label>
              <input
                  type="text" name="cpf" required
                  className=" p-1" defaultValue={data.cpf}/>
            </div>     
            <div className="flex flex-col my-2">
              <label for="data_nascimento">Data de Nascimento</label>
              <input
                  type="Date" name="data_nascimento" required
                  className=" p-1" defaultValue={data.data_nascimento}/>
            </div>     
            <div className="flex flex-col my-2">
              <label for="data_admissao">Data de Admissão</label>
              <input
                  type="Date" name="data_admissao" required
                  className=" p-1" defaultValue={data.data_admissao}/>
            </div>    
            <div className="flex flex-col my-2">
              <label for="funcao">Função</label>
              <input
                  type="text" name="funcao"
                  className=" p-1" defaultValue={data.funcao}/>
            </div>
            <button className="rounded border border-green-700 m-3 p-2
              justify-self-center self-center hover:bg-green-700 
              hover:shadow-lg hover:shadow-green-700 hover:text-white 
              hover: transition-shadow hover:scale-105 
              ease-linear duration-300 text-center w-[20%]" type="submit">
            Atualizar</button>        
          </form>
      </div>
      <div className=" m-8 p-4  self-center flex flex-col justify-around items-center">
      <Link className="rounded border border-red-700 m-3 p-2
        justify-self-center	 self-end hover:bg-red-700 
        hover:shadow-lg hover:shadow-red-700 hover:text-white 
         hover: transition-shadow hover:scale-105 
        ease-linear duration-300 text-center cursor-pointer w-[80%]" href="/" >Cancelar</Link>
      </div>
    </div>
  )
}
