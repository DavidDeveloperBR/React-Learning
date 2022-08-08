const Challenge = () => {
    let a = 10;
    let b = 5;

    const soma = () => {
        console.log(a + b);
    }

    return(
        <div>
            <h1>Calculando</h1>
            <button onClick={soma}>Soma</button>
        </div>
    )
}

export default Challenge;