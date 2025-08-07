export default function Content ({status, title, description}) {
    return (
        <>
            <h2 className={`
                text-lg font-semibold leading-tight
                ${status === 'Completed' 
                    ? 'text-gray-600 line-through' 
                    : 'text-gray-900'
                }
            `}>
                {title}
            </h2>
            <p className={`
                text-sm leading-relaxed
                ${status === 'Completed' 
                    ? 'text-gray-500 line-through' 
                    : 'text-gray-600'
                }
            `}>
                {description}
            </p>
        </>
    );
}
