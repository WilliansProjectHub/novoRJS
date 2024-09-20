import styles from './Loading.module.css'
import loading from './circles.svg'

function Loading() {
    return(
        <div>
            <img src={loading}></img>
        </div>
    )
}

export default Loading