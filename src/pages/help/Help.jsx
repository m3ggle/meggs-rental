import { useState, useEffect } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";

const initialItems = [0, 1, 2, 3, 4];
const height = 70;
const padding = 10;
const size = 150;

function Item({ total, index, onDelete }) {
  const controls = useAnimation();

  async function handleDragEnd(_, info) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      await controls.start({ x: "-100%", transition: { duration: 0.2 } });
      onDelete(index);
    } else {
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  }

  return (
    <motion.div //container
      style={{
        width: 150,
        height: height,
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: total - 1 === index ? 0 : 10,
        willChange: "transform",
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      layout
      transition={{ type: "spring", stiffness: 600, damping: 30 }}
    >
      <motion.div // here the MobileCatalogCard
        style={{
          width: size,
          height: height,
          borderRadius: 20,
          backgroundColor: "#fff",
        }}
        drag="x"
        dragDirectionLock
        onDragEnd={handleDragEnd}
        animate={controls}
      />
    </motion.div>
  );
}

const Help = () => {
  const y = useMotionValue(0);

  const [items, setItems] = useState(initialItems);
  const { top, bottom } = useConstraints(items);
  const controls = useAnimation();
  const totalScroll = getHeight(items);
  const scrollContainer = 150;

  function onDelete(index) {
    const newItems = [...items];
    newItems.splice(index, 1);

    const newScrollHeight = getHeight(newItems);
    const bottomOffset = -y.get() + scrollContainer;
    const bottomWillBeVisible = newScrollHeight < bottomOffset;
    const isScrollHeightLarger = newScrollHeight >= scrollContainer;

    if (bottomWillBeVisible && isScrollHeightLarger) {
      controls.start({ y: -newScrollHeight + scrollContainer });
    }

    setItems(newItems);
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 30,
        backgroundColor: "transparent",
        overflow: "hidden",
        position: "relative",
        transform: "translateZ(0)",
      }}
    >
      <motion.div
        style={{ y: y, height: totalScroll }}
        drag="y"
        dragDirectionLock
        dragConstraints={{ top, bottom }}
        animate={controls}
      >
        {items.map((value, index) => {
          return (
            <Item
              total={items.length}
              index={index}
              onDelete={onDelete}
              key={value}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default Help

function getHeight(items) {
  const totalHeight = items.length * height;
  const totalPadding = (items.length - 1) * padding;
  const totalScroll = totalHeight + totalPadding;
  return totalScroll;
}

function useConstraints(items) {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    setConstraints({ top: size - getHeight(items), bottom: 0 });
  }, [items]);

  return constraints;
}
