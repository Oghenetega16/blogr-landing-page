export default function Button({ text, textColor, bgColor, border, padding }) {
    return (
        <div className={`${textColor} ${bgColor} ${border} ${padding} rounded-3xl inline-flex md:px-5 md:py-2`}>
            <p>{text}</p>
        </div>
    )
}