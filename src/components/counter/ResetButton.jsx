import './Counter.css'
import Counter from'./Counter'

export default function ResetButton({resetCounter}){

    function resetCounterFunction(){
        resetCounter()
    }

    return(
        <div className="Counter">
            <button className="ResetButton" 
                    onClick={resetCounterFunction}
            >Reset</button>
        </div>
    )
}