import { BookCheck, DeleteIcon, Edit, X } from 'lucide-react';
import Button from '../ui/Button';
import Tooltip from '../ui/Tooltip';
import Content from './Content';

export default function Item({ title, description, status, id, onComplete, onUndone, onEdit, onDelete }) {
    return (
        <li className={`
            flex flex-col p-4 mb-3 w-full gap-y-3 rounded-lg border transition-all duration-200 shadow-sm hover:shadow-md
            ${status === 'Completed' 
                ? 'bg-green-50 border-green-200 opacity-90' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            }
        `}>
            <section className="flex flex-col gap-y-2">
                <Content
                    status={status}
                    title={title}
                    description={description}
                />
            </section>
            <footer className="flex items-center justify-between pt-2 border-t border-gray-100">
                <Tooltip title={status} />
                <div className="flex gap-x-1 flex-shrink-0">
                    { status === 'Pending' ? (
                        <>
                            <Button 
                                color="green" 
                                icon={<BookCheck size={14} />} 
                                onClick={() => onComplete ? onComplete(id) : alert('Complete Clicked')} 
                            />
                            <Button 
                                title="Edit" 
                                color="yellow" 
                                icon={<Edit size={14} />} 
                                onClick={() => onEdit ? onEdit(id) : alert('Edit Clicked')} 
                            />
                            <Button 
                                title="Delete" 
                                color="red" 
                                icon={<DeleteIcon size={14} />} 
                                onClick={() => onDelete ? onDelete(id) : alert('Delete Clicked')} 
                            />
                        </>
                    ) : status === 'Completed' ? (
                        <>
                            <Button 
                                color="orange" 
                                icon={<X size={14} />} 
                                onClick={() => onUndone ? onUndone(id) : alert('Reopen Clicked')} 
                            />
                            <Button 
                                title="Edit" 
                                color="yellow" 
                                icon={<Edit size={14} />} 
                                onClick={() => onEdit ? onEdit(id) : alert('Edit Clicked')} 
                            />
                            <Button 
                                title="Delete" 
                                color="red" 
                                icon={<DeleteIcon size={14} />} 
                                onClick={() => onDelete ? onDelete(id) : alert('Delete Clicked')} 
                            />
                        </>
                    ) : null}
                </div>
            </footer>
        </li>
    );
}