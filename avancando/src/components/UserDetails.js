
const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {job}</li>
            <li>{age >= 18 ? <p>Pode tirar carteira de motorista</p> : <p>Não pode tirar carteira de motorista</p>}</li>
        </ul>
    </div>
  )
}

export default UserDetails