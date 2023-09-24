import React from "react";

export const PoliticianForm = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <form
      onSubmit={() => {
        handleSubmit();
      }}
      className="mt-3 gap-2"
    >
      <div className=" w-full">
        <label className="flex flex-col mb-3 ">
          <p className="text-purple-200 text-xs">
            Name
            <span className="text-bigbang">*</span>
          </p>
          <input
            type="text"
            name="name"
            required
            className="input rounded-md w-full bg-purple-300/30 border-purple-300"
          />
        </label>
      </div>
      <label className="flex flex-col text-left">
        <p className="text-purple-200 text-xs">
          Description
          <span className="text-bigbang">*</span>
        </p>
        <input
          type="email"
          name="email"
          required
          className="input rounded-md w-full bg-purple-300/30 border-purple-300"
        />
      </label>

      <div className="flex justify-start">
        <button
          type="submit"
          //   disabled={isLoading}
          className="px-10 mt-4 text-lg w-full h-10 text-purple-100 btn bg-black hover:bg-black/70 rounded-md "
        >
          {"Send"}
        </button>
      </div>
    </form>
  );
};
