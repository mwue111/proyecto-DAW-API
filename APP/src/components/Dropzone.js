import React from "react";
import Image from "next/image";
import FilePreview from "./FilePreview";

/**
 * DropZone component.
 * Renders a drop zone for selecting or dropping files.
 * @returns {JSX.Element} The rendered component.
 */
const DropZone = () => {
  return (
    <>
      <div >
        <Image src="/upload.svg" alt="upload" height={50} width={50} />
        <input id="fileSelect" type="file" multiple  />
        <label htmlFor="fileSelect">You can select multiple Files</label>
        <h3 >
          or drag &amp; drop your files here
        </h3>
      </div>
      {/* Pass the selectect or dropped files as props */}
      <FilePreview fileData={data} />
    </>
  );
};

export default DropZone;
