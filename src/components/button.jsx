export default function Button({ text, textColor, bgColor, border, padding, hoverBgColor, hoverTextColor }) {
    return (
        <div className={`${textColor} ${bgColor} ${border} ${padding} ${hoverBgColor} ${hoverTextColor} rounded-3xl inline-flex md:px-5 md:py-2 cursor-pointer md:hover:bg-very-light-red`}>
            <p>{text}</p>
        </div>
    )
}