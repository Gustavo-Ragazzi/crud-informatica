export default function InputForm(props: any) {
    return (
        <label className="flex flex-col">
            <h3 className="text-white pl-4">{props.label}</h3>
            <input className="w-full h-12 bg-gray-500 px-3 text-white rounded-full" 
                type={props.type}
                name={props.name}
                key={props.label + props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </label>
    )
}