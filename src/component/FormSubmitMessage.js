import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const FormSubmitMessage = ({ closeSubmitMessage }) => {
  return (
    <div className="z-30 fixed top-0 left-0 h-screen w-full submit-message-background flex justify-center items-center">
      <div className="relative rounded h-1/2 bg-zinc-800 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 p-4 gap-8 text-cyan-500 flex flex-col justify-center items-center">
        <AiOutlineClose
          onClick={closeSubmitMessage}
          className="cursor-pointer w-12 h-12 text-white absolute right-4 top-2"
        />
        <h3 className="text-2xl">Email sent successfully</h3>
        <p className="p-2">
          &nbsp;&nbsp;Thanks for reaching out to me. I will reply as soon as
          possible and hope we will have the opportunity to cooperate in the
          future.
        </p>
        <button
          onClick={closeSubmitMessage}
          className="w-1/3 border-2 border-cyan-300 p-2"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default FormSubmitMessage;
