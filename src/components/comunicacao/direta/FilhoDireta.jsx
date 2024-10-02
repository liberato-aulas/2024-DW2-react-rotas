
export function FilhoDireta(props) {

    return (
        <div className={`
        w-full flex flex-col items-center p-7 rounded-md
        bg-red-500 text-white 
    `}>
            <span className="text-4xl p-5">{props.texto}</span>
        </div>
    )
}