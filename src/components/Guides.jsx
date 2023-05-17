import React, { useState } from "react";
import { Container } from "./Container";

export default function Guides() {
  return (
    <Container className='' id='guides'>
      <div className="bg-gray-50 xl:px-20 px-6 md:py-20 py-14 w-full">
        <div className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center">
          <div className="xl:w-1/3 lg:w-1/2">
            <h1 className="text-3xl font-medium tracking-tight text-gray-800">Step by Step Guide</h1>
            <p className="mt-6 text-lg text-gray-400">Here is a step-by-step guide on how to use the Bell Control app:</p>
            <div className="mt-10">
              <div className="flex items-center">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/arrow.svg" alt="arrow right" />
                <p className="xl:text-base text-sm font-medium leading-4 text-gray-300 ml-4">On the main screen of the app, you will likely need to sign in using your Bell account credentials. If you dont have an account, there should be an option to create one</p>
              </div>
              <div className="flex items-center md:mt-6 mt-4">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/arrow.svg" alt="arrow right" />
                <p className="xl:text-base text-sm font-medium leading-4 text-gray-300 ml-4">Team Accounts</p>
              </div>
              <div className="flex items-center md:mt-6 mt-4">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/arrow.svg" alt="arrow right" />
                <p className="xl:text-base text-sm font-medium leading-4 text-gray-300 ml-4">Email Marketing</p>
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 md:mt-0 mt-10">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/world-image-component.png" alt="world image with search" className="xl:w-auto xl:h-auto md:w-80 md:h-80 w-full h-full" />
          </div>
        </div>
      </div>
    </Container>
  );
}
