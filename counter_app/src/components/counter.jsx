export default function Counter(){
    return (
        <div className="container my-5">
            <div className="card text-center my-5">
                <div className="card-body">
                    <h1>Counter App</h1>
                    <div className="my-5">
                        <h2 className="my-4">count</h2>
                        <button className="btn btn-success mx-4"> + </button>
                        <button className="btn btn-danger mx-4"> - </button>
                        <button className="btn btn-secondary mx-4">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}