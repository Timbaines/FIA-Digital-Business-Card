import { FiArrowUpRight } from 'react-icons/fi';

export default function Card(props) {

    return (
        <div className="card">
            <p className="card-number">{props.number}</p>
            <img src={`${props.socialBadge}`} className="card-badge" alt="card-image"/>
            <button
                className="btn btn-connect">{props.socialConnect}
                <span>Visit</span>
                <FiArrowUpRight className="arrow-icon" />
            </button>
        </div>
    )
}