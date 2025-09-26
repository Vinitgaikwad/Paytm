export default function TransactionCard() {
    return (
        <>
            <div className="flex flex-col w-[100%] p-6 rounded-md bg-white shadow-lg shadow-gray-300">
                <p className="flex justify-center text-2xl font-bold text-black w-[100%] mb-6">Send Money</p>
                <div className="flex gap-4 items-center w-[100%] mb-4">
                    <p className="h-10 w-10 flex justify-center items-center rounded-full bg-green-500 text-md">VG</p>
                    <p className=" text-xl font-bold -translate-y-[2px]">Friend's Name</p>
                </div>
                <p className="font-semibold w-[100%] mb-2">Amount (in Rs)</p>
                <input type="text" className="p-2 rounded-md w-[100%] mb-2 border-[1px] border-gray-200" placeholder="Enter Amount" />
                <button type="button" className="p-2 rounded-md bg-green-500 w-[100%] text-white">Initiate Transfer</button>
            </div>
        </>
    )
}