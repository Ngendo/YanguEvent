export default function CardCommitee() {
    return (
        <>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-blueGray-700">
                            Commitee Members
                        </h3>
                    </div>
                    
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See more
              </button>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
                <thread className="thread-light">
                    <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Name 
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Role
                        </th>
                    </tr>
                    <tbody>
                        <tr className="border-t-0 px-6 align-middle border-1-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            John Doe
                        </tr>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Chairman
                        </td>
                    </tbody>

                </thread>

            </table>

        </div>
        </div>
        </>
    )
}


