import Number from "./Number.jsx";

export default function TableNumbers({ numbers }) {

    return (
        <div className='border border-slate-600 rounded-lg p-2'>
            <div className='grid grid-cols-10 gap-0.5'>
                {numbers.map(number => (
                    <Number key={number} number={number} />
                ))}
            </div>
        </div>
    )
}
