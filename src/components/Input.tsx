import { useRef } from "react";
import TDropZone from "./DropZone";
import { InputUI } from "./Types";

// label tailwind classes
const TlabelClasses =
  "inline-flex md:col-span-2 whitespace-nowrap text-xl items-center   text-gray-500 cursor-pointer";

// input tailwind classes
const TInputClasses =
  "p-4 rounded border-0 md:col-span-10  bg-gray-50  text-xl  text-gray-500  block flex-1 min-w-0 w-full  border-gray-300   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ";

// Tripe Input component
const TInput = ({ label, name, type, onUpload, ...rest }: InputUI) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // TRIGGER LABEL CLICK WHILE htmlFor attribute bugs
  const handleLabelClick = () => {
    inputRef?.current?.focus();
    inputRef?.current?.click();
  };
  const onFileUploaded = (file: any) => {
    console.log("file uploaded");
    if (file && onUpload) onUpload(file);
  };

  // INPUT TYPE FILE
  if (type === "file") {
    return <TDropZone label={label} name={name} onUpload={onFileUploaded} />;
  }
  return (
    <div className=" grid grid-flow-row auto-rows-max md:grid-cols-12 gap-5">
      <label
        className={TlabelClasses}
        htmlFor={name}
        onClick={handleLabelClick}
      >
        {label}
      </label>

      <input
        ref={inputRef}
        name={name}
        type={type || "text"}
        className={TInputClasses}
        {...rest}
      />
    </div>
  );
};

export default TInput;
