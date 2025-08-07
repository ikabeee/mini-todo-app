import { colorClasses } from "../utils/constants/colorClasses";

export default function Button ({ onClick, color, title, icon, alt }) {

    return (
        <button
            onClick={onClick}
            aria-label={alt}
            className={`${colorClasses[color] || 'bg-gray-500 hover:bg-gray-600'} flex flex-row items-center justify-center text-white ${title ? 'px-3 py-2' : 'p-2'} rounded-lg cursor-pointer transition-colors duration-200 text-sm`}
        >
            {icon && <span className={title ? "mr-2" : ""}>{icon}</span>}
            {title && title}
        </button>
    );
}