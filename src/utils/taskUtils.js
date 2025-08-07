export const createTask = ({ title, description }) => {
    return {
        id: Date.now().toString(),
        title: title.trim(),
        description: description.trim(),
        status: 'Pending'
    };
};

export const updateTask = (existingTask, updates) => {
    return {
        ...existingTask,
        ...updates,
        title: updates.title?.trim() || existingTask.title,
        description: updates.description?.trim() || existingTask.description
    };
};

export const validateTaskData = ({ title, description }) => {
    const errors = {}; 
    if (!title?.trim()) {
        errors.title = 'El título es obligatorio';
    }
    if (!description?.trim()) {
        errors.description = 'La descripción es obligatoria';
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};


export const TASK_STATUS = {
    PENDING: 'Pending',
    COMPLETED: 'Completed'
};

export const isTaskCompleted = (task) => {
    return task.status === TASK_STATUS.COMPLETED;
};

export const isTaskPending = (task) => {
    return task.status === TASK_STATUS.PENDING;
};
