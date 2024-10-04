export function FilhoIndireta(props) {
  return (
    <div
      className={`
            w-full flex flex-col items-center p-7 rounded-md
            bg-red-500 text-white 
        `}
    >
      <div className="flex gap-3">
        <button className="botao" onClick={() => props.alterar("João")}>
          João
        </button>
        <button className="botao" onClick={() => props.alterar("Maria")}>
          Maria
        </button>

        <button className="botao" onClick={() => props.alterar("José")}>
          José
        </button>
      </div>
    </div>
  );
}
