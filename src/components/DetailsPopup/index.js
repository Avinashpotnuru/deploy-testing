import React, { useState } from "react";

import Modal from "../UI/Model";

// third party imports

import { AiOutlineClose } from "react-icons/ai";

import { closeDetailsPopup } from "@/src/store/slices/popup";

import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const DetailsPopup = () => {
  const dispatch = useDispatch();
  const [isToggle, setToggle] = useState(false);
  const detailToggle = useSelector(
    (state) => state.popSlice.detailsPopup.status
  );

  const details = useSelector(
    (state) => state.popSlice.detailsPopup.helperData
  );
  return (
    <Modal
      isOpen={detailToggle}
      parentClasses={" flex justify-center items-center  w-full m-auto"}
    >
      <div className="bg-white flex flex-col justify-center items-center rounded-lg shadow-lg h-[450px] w-[80%] sm:w-[50%] lg:w-[30%]  relative">
        <div
          onClick={() => {
            dispatch(closeDetailsPopup());
            setToggle(false);
          }}
          className="absolute bg top-4 right-4 sm:top-7 sm:right-7"
        >
          <AiOutlineClose />
        </div>

        <div className="p-6 sm:p-4 mx-auto w-[80%]">
          {!isToggle ? (
            <>
              <h2 className="text-xl font-bold mb-4 text-center"> Details</h2>
              <dl>
                <div className="mb-4">
                  <dt className="font-bold">Name:</dt>
                  <dd className="text-gray-800">{details?.firstName}</dd>
                </div>
                <div className="mb-4">
                  <dt className="font-bold">Email:</dt>
                  <dd className="text-gray-800">{details?.email}</dd>
                </div>
                <div className="mb-4">
                  <dt className="font-bold">Phone Number:</dt>
                  <dd className="text-gray-800">{details?.number}</dd>
                </div>
                <div className="mb-4">
                  <dt className="font-bold">Message:</dt>
                  <dd className="text-gray-800">{details?.message}</dd>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => setToggle(true)}
                    className="submitbutton"
                  >
                    Conform
                  </button>
                </div>
              </dl>
            </>
          ) : (
            <Image height={400} width={400} alt="img1" src="/thankyou.jpg" />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default DetailsPopup;
