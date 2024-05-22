export default function Card(props) {
    return (
        <div className="card">
            <p className="card-number">{props.spot}</p>
            <img src={`${props.socialBadge}`} className="card-badge" alt="card-image"/>
            <button className="btn-connect">{props.connect}Connect</button>
        </div>
    )
}