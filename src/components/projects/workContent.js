import React, { useState } from "react"
import WorkContext from "./context"
import Ripples from "react-ripples"
import { FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons"
function WorkContent({ content }) {
  console.log("content: ", content)
  const { contextValues } = React.useContext(WorkContext)
  const setActiveThumbnail = contextValues.setActiveThumbnail
  const setContentExpanded = contextValues.setContentExpanded
  function closeClick(e) {
    setTimeout(() => {
      setActiveThumbnail("")
      setContentExpanded(false)
    }, 300)
  }
  return (
    <>
      <div className={`interiorExpandedContent p-1 p-lg-4 mt-3 w-100`}>
        <div className="row negativeMargin">
          <div className="col-auto ml-auto">
            <Ripples className="rounded">
              <button
                onClick={(e) => {
                  closeClick(e)
                }}
                className="btn btn-outline-secondary closeWorkContent align-items-center"
              >
                <IconContext.Provider
                  value={{ size: "1.5em", style: { verticalAlign: "middle" } }}
                >
                  <FaTimes></FaTimes>
                </IconContext.Provider>
              </button>
            </Ripples>
          </div>
        </div>
        {content}
      </div>
    </>
  )
}
export default WorkContent
