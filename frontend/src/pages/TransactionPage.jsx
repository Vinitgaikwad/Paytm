import TransactionCard from "../components/TransactionCard";

export default function TransactionPage() {
    return (
        <>
            <div className="sm:h-screen sm:w-screen flex justify-center items-center bg-gray-100">
                <div className="w-[100%] p-2 sm:p-0 sm:max-w-[400px]">
                    <TransactionCard></TransactionCard>
                </div>
            </div>
        </>
    )
}