function Header({title}: {title : string}){
    return(
        <header>
            <div className="container">
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export default Header