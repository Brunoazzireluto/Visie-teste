const FormCamp = ({campName, type, name}) => {
    return (
        <div className="flex flex-col my-4">
            <label for={name}>{campName}</label>
            <input
                type={type} name={name} required
                className=" p-1"/>
        </div>
    )
}

export default FormCamp;