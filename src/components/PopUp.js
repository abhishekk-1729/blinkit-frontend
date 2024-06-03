import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function PopUp({ dropdownRef, setIsVisible }) {
  return (
    <div>
      <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity">
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              ref={dropdownRef}
              class="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <button className=" float-right mt-4 mr-4">
                <svg
                  onClick={() => {
                    setIsVisible(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  height="14px"
                  width="14px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 490 490"
                >
                  <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161   11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 " />
                </svg>
              </button>

              <div class="bg-white sm:p-6 sm:pb-4">
                <>
                  <div class="sm:flex flex-col sm:items-center gap-2 justify-center items-center">
                    <div className="w-full flex justify-center items-center p-2">
                      <div class="mx-auto flex h-16 w-full flex-shrink-0 items-center justify-center sm:mx-0 sm:h-16 sm:w-16">
                        <img src="/utils/ai.png" alt="" />
                      </div>
                    </div>
                    <div class=" text-center  sm:mt-0 sm:text-left">
                      <h3
                        class="text-xl font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Visit our new{" "}
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-semibold">
                          AI for Quick Mart
                        </span>{" "}
                        with your Order List
                      </h3>

                      <div class=" flex justify-center ">
                        <p class="text-sl text-gray-500">
                          Shop Smart with Quick Mart!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="px-4 py-3 flex px-6 justify-end items-center gap-2">
                    <button
                      onClick={() => setIsVisible(false)}
                      className="rounded-md p-3 h-1/6 mt-2 rounded-xl p-4 text-l    bg-[#FFFFF] border-2 border-black"
                    >
                      Close
                    </button>

                    <Link to="/searchAI">
                      <button
                        onClick={() => setIsVisible(false)}
                        className="rounded-md p-3 h-1/6 mt-2 rounded-xl p-4 text-l  text-white  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-[#0D831E]"
                      >
                        Try Out
                      </button>
                    </Link>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
