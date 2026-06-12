import Number from './Number.jsx';

export default function NumberCircle({ number }) {

    return(
        <div className='w-8 h-8 p-0.5 text-[.85rem] bg-slate-600 rounded-full flex items-center justify-center
             cursor-pointer select-none transition-all duration-200 ease-in-out hover:bg-slate-500 hover:p-1'>
            <div className='w-full h-full bg-slate-800 rounded-full flex justify-center items-center'>
                <Number number={number} />
            </div>
        </div>
    )
}