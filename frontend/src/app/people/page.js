import FormCamp from "@/components/FormCamp";
import Link from "next/link";

export default function Index() {
    return (
    <div className="container mx-auto py-10 flex justify-center h-screen">
        <div className="w-4/6  border border-gray-600 bg-gray-400 rounded-md flex flex-col">
            <div className="w-4/4 border-b border-b-red-700 h-[8%] flex flex-row items-center justify-center">
              <h1 className="text-lg justify-self-center self-center">Vizualizar pessoa</h1>
            </div>
            <form className="mx-3 my-6 p-4 border border-balck">             
              <FormCamp campName="Nome Completo" type="text" name="nome"></FormCamp>
              <FormCamp campName="RG" type="text" name="rg"></FormCamp>
              <FormCamp campName="CPF" type="text" name="cpf"></FormCamp>
              <FormCamp campName="Data de Nascimento" type="Date" name="data_nascimento"></FormCamp>
              <FormCamp campName="Data de Admissão" type="Date" name="data_admissao"></FormCamp>
              <FormCamp campName="Função" type="text" name="funcao"></FormCamp>
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