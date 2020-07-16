import React, { useState } from "react"
import WorkThumb from "./workThumb"
import WorkContent from "./workContent"
import FenceContent from "./fenceContent"
import KeenContent from "./keenContent"
import WorkContext from "./context"
function WorkRow() {
  function test(test2) {
    console.log("testFunc: ", test2)
  }
  const [currentContent, setCurrentContent] = useState("")
  const [activeThumbnail, setActiveThumbnail] = useState("")
  const [contentExpanded, setContentExpanded] = useState(false)

  const thumbnailClick = (e, ref, content) => {
    //click wasn't on last click, or is first click
    if (ref.current !== activeThumbnail) {
      //record which thumbnail is active
      setActiveThumbnail(ref.current)
      //set currentContent
      setCurrentContent(content)
      //open content section
      setContentExpanded(true)
      console.log("new click")
      console.log("event: ", e)
      console.log("ref: ", ref)
    }
    //click was on previously clicked thumbnail
    else {
      //make sure future toggles of the same click work
      if (contentExpanded === false) {
        setContentExpanded(true)
      } else {
        setContentExpanded(false)
        setActiveThumbnail("")
        console.log("same click")
        console.log("event: ", e)
      }
    }
    console.log("contentExpanded: ", contentExpanded)
  }
  const contextValues = {
    thumbnailClick,
    contentExpanded,
    activeThumbnail,
  }
  return (
    <>
      <WorkContext.Provider value={{ contextValues }}>
        <div className="row justify-content-around w-100">
          <div className="col-3">
            <WorkThumb
              src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/gerbil-1"
              title="test1"
              content={<FenceContent />}
            />
          </div>
          <div className="col-3 ">
            <WorkThumb
              src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/gerbil-1"
              title="test2"
              content={<KeenContent />}
            />
          </div>
          <div className="col-3">
            <WorkThumb src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/gerbil-1" />
          </div>
          <div className="col-3">
            <WorkThumb src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/gerbil-1" />
          </div>
        </div>

        <div
          className={`workContentRow row w-100 ${
            contentExpanded ? "" : "d-none"
          }`}
        >
          <WorkContent content={currentContent} />
        </div>
      </WorkContext.Provider>
    </>
  )
}
export default WorkRow
