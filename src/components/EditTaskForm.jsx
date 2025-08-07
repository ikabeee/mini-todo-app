import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Save, X } from 'lucide-react';
import { updateTask, validateTaskData, TASK_STATUS } from '../utils/taskUtils';

export default function EditTaskForm({ task, onEditTask, onClose }) {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (task) {
            setFormData({
                title: task.title,
                description: task.description
            });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validation = validateTaskData(formData);

        if (validation.isValid) {
            const updatedTask = updateTask(task, formData);
            onEditTask(updatedTask);
            onClose();
        } else {
            setErrors(validation.errors);
        }
    };

    if (!task) return null;

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label
                    htmlFor="edit-title"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Task Title
                </label>
                <input
                    type="text"
                    id="edit-title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.title
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300'
                        }`}
                    placeholder="Ej: Completar el proyecto"
                />
                {errors.title && (
                    <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
            </div>

            <div>
                <label
                    htmlFor="edit-description"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Description
                </label>
                <textarea
                    id="edit-description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${errors.description
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300'
                        }`}
                    placeholder="Describe los detalles de la tarea..."
                />
                {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Status: </span>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${task.status === TASK_STATUS.COMPLETED
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {task.status === TASK_STATUS.COMPLETED ? 'Completed' : 'Pending'}
                </span>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <Button
                    type="button"
                    title="Cancel"
                    color="red"
                    icon={<X size={16} />}
                    onClick={onClose}
                />
                <Button
                    type="submit"
                    title="Save"
                    color="blue"
                    icon={<Save size={16} />}
                />
            </div>
        </form>
    );
}
