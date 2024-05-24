import './icon.css'
export default function Icon(props){
    return(
        <div className='card'>
            <h1>{props.article.name}</h1>
            <p>{props.article.phone}</p>
            <p>{props.article.address}</p>
            <p>{props.article.email}</p>
        </div>
    )
}