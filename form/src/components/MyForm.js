import './MyForm.css'
import {useState} from 'react';
const MyForm = ({user}) => {
    // Controlled input 

    // Gerenciamento de dados
    const [name, setName] = useState(user != null ? user.name : "");
    const [email, setEmail] = useState(user != null ? user.email : "");
    const [bio, setBio] = useState(user != null ? user.bio : "");
    const [role, setRole] = useState(user != null ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    }

    //console.log(name);
    //console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulário...");
        console.log(name,email,bio, role);

        // Limpar formulário
        setName("");
        setEmail("");
    }



  return (
    <div>
        {/* Criação de formulário */}
        {/* Envio de form*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
            </div>
            {/* Label envovendo input*/}
            <label>
                <span>E-mail</span>
                {/* Simplificação de manipulaçãode state */}
                <input type="email" name="email" placeholder="Digite o seu e-mail" 
                onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/* Textarea */}
            <label>
                <span>Bio: </span>
                <textarea name="bio" placeholder='Descrição do usuário...' onChange={(e) => setBio(e.target.value)} value={bio}>
                </textarea>
            </label>
            {/* Select */}
            <label>
                <span>Função:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm