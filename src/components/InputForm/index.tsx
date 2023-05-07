export default function InputForm(props: any) {
    return (
        <label className="flex flex-col">
            <h3 className="text-white pl-4">{props.label}</h3>
            <input className="w-full h-12 bg-gray-500 px-3 text-white rounded-full" 
                key={props.label + props.name}
                type={props.type}
                step={props.step}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                required={props.required}
                min={props.min}
            />
        </label>
    )
}