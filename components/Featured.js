import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import FormLoader from "./FormLoader";
import styles from './Featured.module.css';

export default function Featured() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      axios()
        .get("/stories/public")
        .then((response) => {
          setStories(response.data);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  });

  if (isLoading) {
    return <FormLoader className="mb-10"></FormLoader>;
  }

  if (stories?.alumni.length < 3 && !stories?.mentor.length < 3) {
    return <div></div>;
  }

  return (
    <div>
      <section>
        <div class="px-4 md:mt-0 py-0 mx-auto max-w-screen-xl sm:px-6 lg:px-8 pt-2">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16 lg:items-center">
            {stories?.mentor?.length > 2 && (
              <div class="relative">
                {" "}
                
                <h1 className={styles.mainHeading+" font-bold pb-2 mt-14 mb-14 sm:text-xl text-2xl md:text-3xl text-center"}>
                  FEATURED 
                  <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    MENTORS
                  </span>
                  <div className={styles.bottomLine}></div>
                </h1>
                <div class={styles.boxMentors+" flex flex-wrap -mx-3 overflow-hidden"}>
               
                  {stories.mentor.map((alumni, index) => (

                    <div
                      class="my-3 px-3 w-1/2 overflow-hidden lg:w-1/3"
                      key={index}
                    >
                      <a
                        class="relative block bg-black group rounded-xl"
                        href={`/stories/${index + 4}`}
                      >
                      <img className={styles.plusImage} src="/assets/add.png" alt="img" />
                        <img
                          className="rounded-t-xl"
                          src={alumni.user.picture}
                          alt={alumni.user.name}
                          style={{ height: 176, width: 176 }}
                        />
                        <div class="relative rounded-b-xl overflow-hidden p-3 bg-indblue" style={{position:'relative'}}>
                         
                           
                          <p class="text-sm text-left w-full font-bold text-white">
                            {alumni.user.name}
                          </p>
                        </div>
                        {/*TODO: FIX IMAGE HEIGHTS*/}
                      </a>
                    </div>
                    
                  ))}
                </div>
              </div>
            )}

            {stories.alumni.length > 2 && (
              <div class="relative">
                {" "}
                
                <h1 className={styles.mainHeading+" font-bold pb-4 mt-14 mb-14 sm:text-xl text-2xl md:text-3xl text-center"}>
                  SUCCESS 
                  <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    STORIES
                  </span>
                  <div className={styles.bottomLine}></div>
                </h1>
                <div class={styles.boxMentors+" flex flex-wrap -mx-3 overflow-hidden"}>
  
                  {stories.alumni.map((alumni, index) => (
                    <div
                      class="my-3 px-3 w-1/2 overflow-hidden lg:w-1/3"
                      key={index}
                    >
                      <a
                        class="relative block bg-black group rounded-xl"
                        href={`/stories/${index + 1}`}
                      >
                       <img className={styles.plusImage} src="/assets/add.png" alt="img" />
                        <img
                          className="rounded-t-xl"
                          src={alumni.user.picture}
                          alt={alumni.user.name}
                          style={{ height: 176, width: 176 }}
                        />
                        <div class="relative rounded-b-xl overflow-hidden p-3 bg-indblue">
                          <p class="text-sm text-center w-full font-bold text-white">
                            {alumni.user.name}
                          </p>
                        </div>
                        {/*TODO: FIX IMAGE HEIGHTS*/}
                      </a>
                    </div>
                  ))}

                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
