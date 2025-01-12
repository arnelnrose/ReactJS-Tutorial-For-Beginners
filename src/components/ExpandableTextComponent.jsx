import { useState } from 'react'


const ExpandableTextComponent = ({ children, maxChars }) => {
    const [showFullText, setShowFullText] = useState(false);

    const text = showFullText ? children : children.substring(0, maxChars);

    if (children.length <= maxChars) return <div>{children}</div>;
    return <div>{text}...
    <button onClick={() => setShowFullText((prev) => !prev)}>{showFullText ? "Less" : "More"}</button>
    </div>;
}

export default ExpandableTextComponent


// import { useState } from "react";

// const ExpandableTextComponent = ({ children, maxChars }) => {
//     const [showFullText, setShowFullText] = useState(false);

//     const resolveTextContent = (content) => {
//         if (typeof content === "string") return content;
//         if (typeof content === "object" && content?.props) return content.props.children || "";
//         return String(content);
//     };

//     const textContent = resolveTextContent(children);
//     const text = showFullText ? textContent : textContent.substring(0, maxChars);

//     if (textContent.length <= maxChars) return <div>{textContent}</div>;

//     return (
//         <div>
//             {text}{!showFullText && "..."}
//             <button onClick={() => setShowFullText((prevState) => !prevState)}>
//                 {showFullText ? "Less" : "More"}
//             </button>
//         </div>
//     );
// };

// export default ExpandableTextComponent;
