import React from "react";

function Header(props) {
  return (
    <>
      <div className="bg-gray-200 pb-40 dark:bg-darkbg-dark">
        <div className="container py-9 flex justify-between items-center">
          <div>
            <h1 className="text-slate-800 font-bold dark:text-slate-300 text-3xl">
              Social media Dashboard
            </h1>
            <span className="text-sm mx-auto">Total Followers 23.004</span>
          </div>
          <div>
            <label
              for="toggleEight"
              class="flex cursor-pointer select-none items-center"
            >
              <span className="mx-2">
              Dark Mode
              </span>
              <div class="relative">
                <input id="toggleEight" type="checkbox" onChange={props.hundle} class="sr-only" />
                <div class="box bg-dark h-5 w-14 rounded-full shadow-inner transition"></div>
                <div class="dot shadow-switch-1 absolute left-0 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-black dark:bg-white transition">
                  <span class="active border-dark h-4 w-4 rounded-full border bg-black dark:bg-white"></span>
                </div>
              </div>
            </label>

            {/* <label htmlFor="checkbox">Dark Mode</label>
            <span>
              <input
                type="checkbox"
                className="ml-1"
                id="checkbox"
                onChange={props.hundle}
              />
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
