export const useHandleDragEnd = ({ controls, onDelete }) => {
  const handleDragEnd = async (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      await controls.start({ x: "-100%", transition: { duration: 0.2 } });
      onDelete();
    } else {
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  };

  return { handleDragEnd };
};
