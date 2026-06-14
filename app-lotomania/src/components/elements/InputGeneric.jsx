export default function InputGeneric({label, id, ...inputProps}) {

    return (
        <div className={'flex flex-col justify-center items-center p-1'}>
            <label htmlFor={id} className={'self-start text-xs text-orange-400 pb-0.5 ps-1'}>{label}</label>
            <input id={id} className={'px-2 py-0.5 text-sm text-slate-400 rounded border border-slate-600 ' +
                    'bg-slate-700 inset-shadow-sm focus:outline-0 focus:text-white '}
               {...inputProps}/>
        </div>
    )
}
