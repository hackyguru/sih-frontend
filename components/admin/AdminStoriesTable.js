import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import FormLoader from "../FormLoader";
import { toast } from "react-toastify";
import StoryCard from "../StoryCard";
import Pagination from "rc-pagination";

export default function AdminStoriesTable(props) {
  const [list_data, setlistdata] = useState(false);
  const [meta, setMeta] = useState({});

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    handleRequest();
  }, [props.user]);

  function handleRequest(page = 1) {
    setlistdata(false);

    axios()
      .get(`stories?page=${page}`)
      .then(function (response) {
        if (response.status == 200) {
          setlistdata(response.data.data);
          setMeta(response.data);
        }
      });
  }

  // Main list page
  return (
    <>
      <AdminAnnouncementList
        data={list_data}
        setlist={setlistdata}
        setSelected={setSelected}
        handleRequest={handleRequest}
        meta={meta}
      />
      {selected !== null && (
        <StoryCard item={list_data[selected]} setSelected={setSelected} />
      )}
    </>
  );
}

function AdminAnnouncementList({
  data,
  setlist,
  setSelected,
  meta,
  handleRequest,
}) {
  if (!data) {
    return <FormLoader></FormLoader>;
  } else if (data.length == 0) {
    return (
      <div className="text-center mt-10">
        <h1 className={"font-bold"}>No stories yet!</h1>
      </div>
    );
  } else {
    return (
      <div className="pt-10 p-20">
        <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
          <table className="min-w-full col-span-3 rounded-2xl border-collapse block md:table">
            <thead className="block md:table-header-group rounded-2xl">
              <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Title
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  By
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Email
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Display
                </th>
                <th className="bg-indblue p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="block md:table-row-group">
              {data.map((row, index) => {
                return (
                  <StoryRow
                    data={row}
                    setlist={setlist}
                    index={index}
                    setSelected={setSelected}
                  />
                );
              })}
            </tbody>
          </table>
          <div className={"mt-10 text-center mr-16"}>
            <Pagination
              total={meta.total}
              pageSize={15}
              onChange={(page) => handleRequest(page)}
              current={meta.current_page}
              hideOnSinglePage={false}
            ></Pagination>
          </div>
        </div>
      </div>
    );
  }
}

function StoryRow({ data, setlist, setSelected, index }) {
  function handleDisplayChange(id, display) {
    toast.promise(
      axios().post(`stories/${id}/update_display`, {
        display,
      }),
      {
        pending: {
          render() {
            return "Updating.....";
          },
        },
        success: {
          render({ data }) {
            setlist(data.data);
            return "Story updated successfully!";
          },
        },
        error: {
          render() {
            return "Something went wrong!";
          },
        },
      }
    );
  }

  return (
    <tr
      className="bg-gray-300 border border-grey-500 md:border-none block md:table-row sm:mt-10"
      key={data.id}
    >
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.title}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.user.name}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.user.email}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {data.display}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <div className={"ml-3 flex content-center"}>
          {data.display !== "mentor" && (
            <button
              onClick={() => {
                handleDisplayChange(data.id, "mentor");
              }}
              className={"block bg-green-600 rounded-lg p-3 mr-4"}
            >
              Mentor
            </button>
          )}
          {data.display !== "alumni" && (
            <button
              onClick={() => {
                handleDisplayChange(data.id, "alumni");
              }}
              className={"block bg-yellow-500 rounded-lg p-3 mr-4 col-span-2"}
            >
              Alumni
            </button>
          )}
          {data.display !== "none" && (
            <button
              onClick={() => {
                handleDisplayChange(data.id, "none");
              }}
              className={"block bg-red-600 rounded-lg p-3 mr-4 col-span-2"}
            >
              None
            </button>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelected(index);
            }}
            className={
              "block bg-blue-600 rounded-lg p-3 mr-4 col-span-2 align-middle"
            }
          >
            View
          </button>
        </div>
      </td>
    </tr>
  );
}
