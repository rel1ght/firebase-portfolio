import React, { useState } from "react"
import WorkThumb from "./workThumb"
import WorkContent from "./workContent"
import FenceContent from "./fenceContent"
import YourOmahaContent from "./yourOmahaContent"
import DeepictContent from "./deepictContent"
import MsgContent from "./msgContent"
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
    setActiveThumbnail,
    setContentExpanded,
  }
  return (
    <>
      <WorkContext.Provider value={{ contextValues }}>
        <div className="row justify-content-around">
          <div className="col-3">
            <WorkThumb
              src="./img/mountainskygoldensthumbnail.png"
              title="Mountain Sky Goldens"
              content={<MsgContent />}
            />
          </div>
          <div className="col-3 ">
            <WorkThumb
              src="./img/fencethumbnail.png"
              title="Fence"
              content={<FenceContent />}
            />
          </div>
          <div className="col-3">
            <WorkThumb
              src="./img/deepictthumbnail.png"
              title="Deepict"
              content={<DeepictContent />}
            />
          </div>
          <div className="col-3">
            <WorkThumb
              src="./img/youromahathumbnail.jpg"
              title="Your Omaha"
              content={<YourOmahaContent />}
            />
          </div>
        </div>

        <div
          className={`workContentRow row ${contentExpanded ? "" : "d-none"}`}
        >
          <WorkContent content={currentContent} />
        </div>
      </WorkContext.Provider>
    </>
  )
}
export default WorkRow
