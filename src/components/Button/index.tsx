export default function Button(props: any) {
    return (
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-1/3 rounded-full self-center"
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}