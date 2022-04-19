import Skeleton from "react-loading-skeleton";
import './card.css'

const CardSkeleton = () => {
    return (
        <div className='card'>
            <div className='img'>
                <img className='imgSkeleton'/>
                <div className='imgSkeleton skeleton-text'></div>
                <div className='imgSkeleton skeleton-text'></div>
            </div>
        </div>
    )
}

export default CardSkeleton;