'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { MdEdit, MdVisibility, MdDeleteForever } from "react-icons/md";


const PersonItem = ({ name, birth, id }) => {
    const router = useRouter()
    //Função que faz o delete do usario na api
    const handleDelete = async () => {
        const endpoint = `http://127.0.0.1:8000/people/${id}`
        const response = await fetch(endpoint, {method: 'DELETE'});
        alert("Registro Deletado")
        router.refresh("/")
    }

    
    return (
        <tr className="border-b border-gray-600 flex items-center justify-around">
            <td className="py-2 text-lg ">{name}</td>
            <td className="py-2 text-lg">{birth}</td>
            <td className="p-2 text-2xl text-green-700 
                hover:scale-125 hover:text-green-600 ease-linear duration-300 cursor-pointer"> 
                <Link href={{pathname:`/people/${id}`, query: {id_pessoa: id}}} ><MdVisibility/></Link> </td>
            <td className="p-2 text-2xl text-yellow-600 
                hover:scale-125 hover:text-yellow-500 ease-linear duration-300 cursor-pointer">
                <Link href={{pathname:`/edit-people/${id}`, query: {id_pessoa: id}}} ><MdEdit/></Link></td>
            <td className="p-2 text-2xl text-red-700 
                hover:scale-125 hover:text-red-600 ease-linear duration-300 cursor-pointer" onClick={handleDelete}><MdDeleteForever/></td>
        </tr>
    )
}

export default PersonItem;