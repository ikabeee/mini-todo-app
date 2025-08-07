import { PlusIcon } from 'lucide-react';
import Header from './components/Header';
import Item from './components/Item';
import Button from './ui/Button';
import Modal from './ui/Modal';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';
import { useTasks } from './hooks/useTasks';
import { useModals } from './hooks/useModals';

function App() {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    completeTask,
    uncompleteTask,
    findTaskById
  } = useTasks();

  const {
    isAddModalOpen,
    isEditModalOpen,
    taskToEdit,
    openAddModal,
    closeAddModal,
    openEditModal,
    closeEditModal
  } = useModals();

  const handleAddTask = (newTask) => {
    addTask(newTask);
  };

  const handleEditTask = (updatedTask) => {
    updateTask(updatedTask);
  };

  const handleOpenEditModal = (taskId) => {
    const task = findTaskById(taskId);
    if (task) {
      openEditModal(task);
    }
  };

  const handleCompleteTask = (taskId) => {
    completeTask(taskId);
  };

  const handleUncompleteTask = (taskId) => {
    uncompleteTask(taskId);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <main className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Header title="Task List" />
              <Button 
                title="Add Task" 
                icon={<PlusIcon />} 
                color="blue" 
                onClick={openAddModal} 
              />
            </div>
            <ul className='flex flex-col gap-y-4'>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <Item
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    status={task.status}
                    onComplete={handleCompleteTask}
                    onUndone={handleUncompleteTask}
                    onEdit={handleOpenEditModal}
                    onDelete={handleDeleteTask}
                  />
                ))
              ) : (
                <li className="text-gray-500 text-center">No tasks available</li>
              )}
            </ul>
          </main>
        </div>
      </main>

      {/* Add task modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        title="Add new task"
      >
        <AddTaskForm
          onAddTask={handleAddTask}
          onClose={closeAddModal}
        />
      </Modal>
      {/* Edit task modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        title="Edit Task"
      >
        <EditTaskForm
          task={taskToEdit}
          onEditTask={handleEditTask}
          onClose={closeEditModal}
        />
      </Modal>
    </>
  )
}

export default App
