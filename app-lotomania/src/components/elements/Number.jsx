

export default function Number({ number }) {
    const stringNumber = String(number).padStart(2, '0');

    return(
        <div className='w-fit h-fit flex justify-center items-center'>
            {stringNumber}
        </div>
    )
}
