import { useRouter } from "next/router";
import React, { useState } from "react";

export const PoliticianForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { name, description, image } = Object.fromEntries(formData.entries());
    console.log(name, description, image);

    // upload to IPFS
    // setIsLoading(false)

    router.push("/dashboard");
  };

  return (
    <div className="font-mono">
      <h1 className="text-3xl text-center">Add a politician</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="mt-3 "
      >
        <div className="w-full">
          <label className="flex flex-col mb-4">
            <p className="label-text text-xs my-2">Name</p>
            <input
              type="text"
              name="name"
              placeholder="Joe Biden"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <label className="flex flex-col text-left">
          <p className="label-text text-xs my-2 ">Description</p>
          <input
            type="text"
            name="description"
            placeholder="President"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text text-xs">Add an image</span>
          </label>
          <input
            type="file"
            name="image"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            disabled={isLoading}
            className="px-10 mt-5 text-lg w-full h-10 btn bg-neutral-900 hover:bg-black/70 rounded-md "
          >
            {isLoading ? (
              <span className="loading loading-infinity loading-lg"></span>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
