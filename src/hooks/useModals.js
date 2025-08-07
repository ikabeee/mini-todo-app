import { useState } from 'react';

export const useModals = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
    };

    const openEditModal = (task) => {
        setTaskToEdit(task);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setTaskToEdit(null);
    };

    return {
        isAddModalOpen,
        isEditModalOpen,
        taskToEdit,
        openAddModal,
        closeAddModal,
        openEditModal,
        closeEditModal
    };
};
