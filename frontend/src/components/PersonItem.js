import Link from "next/link";
import { MdEdit, MdVisibility, MdDeleteForever } from "react-icons/md";


const PersonItem = ({name, birth}) => {
    return (
        <tr className="border-b border-gray-600 flex items-center justify-around">
            <td className="py-2 text-lg ">{name}</td>
            <td className="py-2 text-lg">{birth}</td>
            <td className="p-2 text-2xl text-green-700 
                hover:scale-125 hover:text-green-600 ease-linear duration-300 cursor-pointer"> 
                <Link href="/people"><MdVisibility/></Link> </td>
            <td className="p-2 text-2xl text-yellow-600 
                hover:scale-125 hover:text-yellow-500 ease-linear duration-300 cursor-pointer">
                <Link href="/edit-people" ><MdEdit/></Link></td>
            <td className="p-2 text-2xl text-red-700 
                hover:scale-125 hover:text-red-600 ease-linear duration-300 cursor-pointer"><MdDeleteForever/></td>
        </tr>
    )
}

export default PersonItem;