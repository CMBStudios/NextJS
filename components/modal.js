const Modal = (props) =>{
    let toggleClass;
    if(props.activate){
        toggleClass ="modal is-active"
    }
    else{
        toggleClass ="modal"
    }
    return(
        <div className={toggleClass}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Confirm Search</p>
            </header>
            <section className="modal-card-body is-centered">
            {props.content}
            <br />
            Confirm to continue search
            </section>
            <footer className="modal-card-foot">
            <button onClick={props.showResult} className="button is-success">Show Results!</button>
            <button onClick={props.onClick} className="button">Cancel</button>
            </footer>
        </div>
        </div>
    )
}

export default Modal;