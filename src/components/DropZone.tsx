import React, { useRef } from "react";
import UploadIcon from "./UploadIcon";
import { InputUI } from "./Types";
const TlabelClasses =
  "inline-flex md:col-span-2 whitespace-nowrap text-xl items-center   text-gray-500 cursor-pointer";

const TImagePreviewClasses =
  "md:col-span-10 flex flex-col justify-center items-center w-full h-44 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600";

interface IDropZoneProps extends InputUI {
  onUpload: (data: any) => void;
}
const TDropZone = ({ label, name, onUpload }: IDropZoneProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const imagePreview = useRef<HTMLDivElement>(null);

  // TRIGGER LABEL CLICK WHILE htmlFor attribute bugs
  const handleLabelClick = () => {
    inputRef?.current?.focus();
    inputRef?.current?.click();
  };
  // TRIGGER ON CHANGE ON INPUT TYPE FILE
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      const files = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        if (imagePreview.current) {
          imagePreview.current.innerHTML = `<img class="upload_image " src="
            ${this.result}
            " />`;
        }
        console.log("dropzone ", this.result);
        onUpload(this.result);
      });
    }
  };
  return (
    <div className="grid grid-flow-row auto-rows-max md:grid-cols-12 gap-5">
      <label
        className={TlabelClasses}
        htmlFor={name}
        onClick={handleLabelClick}
      >
        {label}
      </label>

      <div
        ref={imagePreview}
        onClick={handleLabelClick}
        className={TImagePreviewClasses}
      >
        <UploadIcon text="Click to upload" />
      </div>
      <input
        ref={inputRef}
        type="file"
        name={name}
        className="hidden"
        onChange={onChange}
      />
    </div>
  );
};

export default TDropZone;
