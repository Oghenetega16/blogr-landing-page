export default function Button({ text, textColor, bgColor, border, padding }) {
    return (
        <div className={`${textColor} ${bgColor} ${border} ${padding} rounded-3xl inline-flex`}>
            <p>{text}</p>
        </div>
    )
}