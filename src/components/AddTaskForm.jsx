import { useState } from 'react';
import Button from '../ui/Button';
import { Plus, X } from 'lucide-react';
import { createTask, validateTaskData } from '../utils/taskUtils';

export default function AddTaskForm({ onAddTask, onClose }) {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });
    const [errors, setErrors] = useState({});

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
            const newTask = createTask(formData);
            onAddTask(newTask);
            onClose();
            setFormData({
                title: '',
                description: ''
            });
        } else {
            setErrors(validation.errors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label 
                    htmlFor="title" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Task Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.title 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300'
                    }`}
                    placeholder="Ex: Complete the project"
                />
                {errors.title && (
                    <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
            </div>

            <div>
                <label 
                    htmlFor="description" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                        errors.description 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300'
                    }`}
                    placeholder="Details about the task..."
                />
                {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
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
                    title="Add Task"
                    color="blue"
                    icon={<Plus size={16} />}
                />
            </div>
        </form>
    );
}
