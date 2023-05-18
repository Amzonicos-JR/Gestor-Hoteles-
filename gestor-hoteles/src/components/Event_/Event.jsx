export const Event = ({name, event_type, price})=>{ //PROPS -> parámetros que se envían al momento de llamar al componente (la función)
    return (
        <>
            <td>{name}</td>
            <td>{event_type}</td>
            <td>{price}</td>
        </>
    )
}