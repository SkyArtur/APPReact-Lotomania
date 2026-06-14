export default function ButtonGeneric({text, type, ...buttonProps}) {

    return (
        <button type={type} {...buttonProps}
                className={'px-4 py-1.5 text-xs text-slate-800 font-bold rounded cursor-pointer select-none border ' +
                    'border-slate-700  bg-linear-to-br from-orange-400 to-orange-600 ' +
                    'transition-all duration-200 ease-in-out outline-orange-400 ' +
                    'hover:outline-2 hover:bg-linear-to-be'}>
            {text}
        </button>
    )
}