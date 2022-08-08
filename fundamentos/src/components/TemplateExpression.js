const TemplateExpression = () => {
    const nome = 'João';
    const data = {
        age: 31,
        job: "Developer"
    };
    
    return(
        <div>
            <h1>Olá {nome}, tudo bem?</h1>
            <h2>Profissão {data.job}</h2>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React!")}</p>
        </div>
    )
}

export default TemplateExpression;