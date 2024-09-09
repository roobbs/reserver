import { IoCodeSlash } from "react-icons/io5";

export default function CreatedBy() {
  return (
    <div className="flex items-center justify-end gap-8 border-b bg-white py-1 pr-4 text-black">
      <div>
        Created by{" "}
        <strong className="hover:text-blue-700">
          <a href="https://github.com/roobbs" target="_blank">
            roobbs
          </a>
        </strong>
      </div>
      <a href="https://github.com/roobbs/reserver" target="_blank">
        <div className="flex items-center gap-2 rounded-md border border-gray-400 p-1 transition duration-300 hover:border-black">
          <IoCodeSlash />
          See code
        </div>
      </a>
    </div>
  );
}
