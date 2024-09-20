export function Pagina(props) {
  return (
    <div className={`flex flex-col flex-1`}>
      <header
        className={`
            flex flex-col justify-center items-start
            px-5 h-16
            border-b border-zinc-700
            bg-zinc-800 text-zinc-400
        `}
      >
        <h1 className="text-xl font-black">{props.titulo}</h1>
        <h2 className="text-sm text-zinc-400">{props.subtitulo}</h2>
      </header>
      <main
        className={`
            flex items-start flex-1
            p-4
            bg-zinc-900 
            text-base text-white
        `}
      >
        {props.children}
      </main>
    </div>
  );
}
