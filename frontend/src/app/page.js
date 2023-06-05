export default function Home() {
  return (
    <div className="container mx-auto py-10 flex justify-center h-screen">
      <div className="flex flex-col shadow-md	shadow-gray">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-800">
                  <tr>
                    <th scope="col" className="px-6 py-4">Nome</th>
                    <th scope="col" className="px-6 py-4">Data de Admissão</th>
                    <th scope="col" className="px-6 py-4">Ver mais</th>
                    <th scope="col" className="px-6 py-4">Editar</th>
                    <th scope="col" className="px-6 py-4">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4">Bruno</td>
                    <td className="whitespace-nowrap px-6 py-4">14/06/2023</td>
                    <td className="whitespace-nowrap px-6 py-4">ver mais</td>
                    <td className="whitespace-nowrap px-6 py-4">Editar</td>
                    <td className="whitespace-nowrap px-6 py-4">Excluir</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4">Bruno</td>
                    <td className="whitespace-nowrap px-6 py-4">14/06/2023</td>
                    <td className="whitespace-nowrap px-6 py-4">ver mais</td>
                    <td className="whitespace-nowrap px-6 py-4">Editar</td>
                    <td className="whitespace-nowrap px-6 py-4">Excluir</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
