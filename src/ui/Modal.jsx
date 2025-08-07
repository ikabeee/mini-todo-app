import { X } from 'lucide-react';
import Button from './Button';

export default function Modal({ isOpen, onClose, children, title }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-auto">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                    <Button
                        icon={<X size={18} />}
                        onClick={onClose}
                        color="red"
                        aria-label="Close modal"
                    />
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
