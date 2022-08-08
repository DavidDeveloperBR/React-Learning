//Arquivos de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {

    return(
        <div>
            {/* Algum comentário */}
            <h1>Me primeiro componente</h1>
            <p className="teste">Teste</p>
            <MyComponent/>
        </div>      
    )
};

export default FirstComponent;