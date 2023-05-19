export const User = ({ DPI, name, surname, phone, email }) => {
    return (
        <>
            <td>{DPI}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{phone}</td>
            <td>{email}</td>
        </>
    )
}