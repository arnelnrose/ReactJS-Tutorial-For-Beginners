import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Lesson11_Like = () => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
        console.log(isLiked ? "Unliked" : "Liked");
    }

    return (
        <div>
            {isLiked ? (
                <AiFillHeart color='red' onClick={toggleLike} />
            ) : (
                <AiOutlineHeart color='red' onClick={toggleLike} />
            )}
        </div>
    );
}

export default Lesson11_Like;
