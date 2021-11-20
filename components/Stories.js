import React from "react";

export default function Stories() {
  return (
    <div>
      <section>
        <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 sm:py-24">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            <div class="flex items-center p-8 bg-gray-100 rounded">
              <div class="max-w-xs mx-auto text-center lg:text-left">
                <h2 class="text-2xl font-bold sm:text-3xl">
                  Product Collection
                </h2>

                <p class="mt-8 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  eveniet ducimus neque sequi amet quia laboriosam dolore
                  dolores rerum ex?
                </p>

                <a
                  href=""
                  class="inline-flex items-center px-5 py-3 mt-12 text-white bg-blue-600 rounded-lg"
                >
                  <span class="text-sm font-medium"> View collection </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-4 lg:py-24">
              <a href="" class="block transition-opacity hover:opacity-75">
                <div class="aspect-w-1 aspect-h-1">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80"
                    alt=""
                    class="object-cover rounded"
                  />
                </div>

                <div class="mt-2 font-medium">
                  <h2 class="lg:text-lg">Clean Watch</h2>
                  <p class="text-sm">$150</p>
                </div>
              </a>

              <a href="" class="block transition-opacity hover:opacity-75">
                <div class="aspect-w-1 aspect-h-1">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80"
                    alt=""
                    class="object-cover rounded"
                  />
                </div>

                <div class="mt-2 font-medium">
                  <h2 class="lg:text-lg">Clean Watch</h2>
                  <p class="text-sm">$150</p>
                </div>
              </a>

              <a href="" class="block transition-opacity hover:opacity-75">
                <div class="aspect-w-1 aspect-h-1">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80"
                    alt=""
                    class="object-cover rounded"
                  />
                </div>

                <div class="mt-2 font-medium">
                  <h2 class="lg:text-lg">Clean Watch</h2>
                  <p class="text-sm">$150</p>
                </div>
              </a>

              <a href="" class="block transition-opacity hover:opacity-75">
                <div class="aspect-w-1 aspect-h-1">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80"
                    alt=""
                    class="object-cover rounded"
                  />
                </div>

                <div class="mt-2 font-medium">
                  <h2 class="lg:text-lg">Clean Watch</h2>
                  <p class="text-sm">$150</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}