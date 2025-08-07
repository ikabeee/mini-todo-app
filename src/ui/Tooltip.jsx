export default function Tooltip({ title }) {

    return (
        <span className={title === 'Completed' ? 'bg-green-500 p-2 rounded-xl w-min text-white' : 'bg-red-500 p-2 rounded-xl w-min text-white'}>{title}</span>
    )
}