"use client";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <div className="relative">
      <main>
        {isModalVisible && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-1/3">
              <div
                className="absolute top-3 right-3 w-6 h-6 cursor-pointer"
                onClick={toggleModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p>Your modal content here</p>
            </div>
          </div>
        )}

        <Header />
        <Navbar />
      </main>
    </div>
  );
}
