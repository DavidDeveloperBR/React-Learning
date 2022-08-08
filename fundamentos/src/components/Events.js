const Events = () =>{

    const handleMyEvent = (e) => {
        console.log(e);
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Render something</h1>;
        }else{
            return <h1>Render nothing</h1>;
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui também!</button>
            </div>
            <div>
                <button onClick={() =>{
                    if(true){
                        console.log("Isso não deveria existir!");
                    }
                }}>Não deveria ser feito</button>
            </div>
            {renderSomething(true)}
        </div>
    )

}

export default Events;