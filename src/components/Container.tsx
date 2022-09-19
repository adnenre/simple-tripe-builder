import { ReactNode } from "react";

interface ContainerUI {
  children: ReactNode | ReactNode[];
  className?: string;
}

// Tript container tailwind classes
const containerClasses = " grid grid-rows-1 gap-10 ";

// Trip Container component

const TContainer = ({ children, className }: ContainerUI) => {
  return (
    <div
      className={
        className ? className.concat(containerClasses) : containerClasses
      }
    >
      {children}
    </div>
  );
};

export default TContainer;
