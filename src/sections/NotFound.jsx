import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center min-h-svh text-white bg-blue-500">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="mt-4 text-4xl">Page Not Found</p>
      <p className="mt-2 text-2xl">
        Sorry, the page you are looking for doesn't exist.
      </p>
      <p className="mt-2 text-xl">
        Go Back to Home Page
      </p>
    </div>
  );
};

export default NotFound;
