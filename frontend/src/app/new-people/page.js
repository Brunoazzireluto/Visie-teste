import Link from "next/link";
import FormCamp from "@/components/FormCamp";


export default function Index() {

  return (
    <div className="container mx-auto py-10 flex justify-center h-screen">
      <div className="w-4/6  border border-gray-600 bg-gray-400 rounded-md flex flex-col">
          <div className="w-4/4 border-b border-b-red-700 h-[8%] flex flex-row items-center justify-center">
            <h1 className="text-lg justify-self-center self-center">Cadastrar nova pessoa</h1>
          </div>
          <form className="mx-3 my-6 p-4 border border-balck" action="http://127.0.0.1:8000/people/" method="post">        
            <div className="flex flex-col my-4">
              <label for="nome">Nome Completo</label>
              <input
                  type="text" name="nome" required
                  className=" p-1"/>
            </div>
            <div className="flex flex-col my-4">
              <label for="rg">RG</label>
              <input
                  type="text" name="rg" required
                  className=" p-1"/>
            </div>     
            <div className="flex flex-col my-4">
              <label for="cpf">CPF</label>
              <input
                  type="text" name="cpf" required
                  className=" p-1"/>
            </div>     
            <div className="flex flex-col my-4">
              <label for="data_nascimento">Data de Nascimento</label>
              <input
                  type="Date" name="data_nascimento" required
                  className=" p-1"/>
            </div>     
            <div className="flex flex-col my-4">
              <label for="data_admissao">Data de Admissão</label>
              <input
                  type="Date" name="data_admissao" required
                  className=" p-1"/>
            </div>    
            <div className="flex flex-col my-4">
              <label for="funcao">Função</label>
              <input
                  type="text" name="funcao" required
                  className=" p-1"/>
            </div>        
          </form>
      </div>
      <div className=" m-8 p-4  self-center flex flex-col justify-around items-center">
      <Link className="rounded border border-green-700 m-3 p-2
        justify-self-center	 self-end hover:bg-green-700 
        hover:shadow-lg hover:shadow-green-700 hover:text-white 
        hover: transition-shadow hover:scale-105 
        ease-linear duration-300 text-center cursor-pointer w-[80%]" href="/new-people" >Cadastrar</Link>
      <Link className="rounded border border-red-700 m-3 p-2
        justify-self-center	 self-end hover:bg-red-700 
        hover:shadow-lg hover:shadow-red-700 hover:text-white 
         hover: transition-shadow hover:scale-105 
        ease-linear duration-300 text-center cursor-pointer w-[80%]" href="/" >Cancelar</Link>
      </div>
    </div>
  )
}
