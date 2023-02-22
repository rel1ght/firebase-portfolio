import React, { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import WorkThumb from "./workThumb"
import WorkContent from "./workContent"
import FenceContent from "./content/fenceContent"
import YourOmahaContent from "./content/yourOmahaContent"
import DeepictContent from "./content/deepictContent"
import MsgContent from "./content/msgContent"
import LeadsContent from "./content/leadsContent"
import SakiContent from "./content/sakiContent"
import PaveContent from "./content/paveContent"
import WorkContext from "./context"
import { SlArrowUp } from "react-icons/sl"
import { Link as ScrollLink } from "react-scroll"

function WorkRow() {
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
    }
    //click was on previously clicked thumbnail
    else {
      //make sure future toggles of the same click work
      if (contentExpanded === false) {
        setContentExpanded(true)
      } else {
        setContentExpanded(false)
        setActiveThumbnail("")
      }
    }
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
          <div className="col-4 col-xl-2">
            <WorkThumb
              src="./img/leadsthumbnail.jpg"
              title="LEADS"
              content={<LeadsContent />}
            />
          </div>
          <div className="col-4 col-xl-2">
            <WorkThumb
              src="./img/sakithumbnail.jpg"
              title="SAKI Dashboard"
              content={<SakiContent />}
            />
          </div>
          {/* <div className="col-3 ">
            <WorkThumb
              src="./img/pavethumbnail.jpg"
              title="PAVE"
              content={<PaveContent />}
            />
          </div> */}
          <div className="col-4 col-xl-2">
            <WorkThumb
              src="./img/deepictthumbnail.png"
              title="Deepict"
              content={<DeepictContent />}
            />
          </div>
          <div className="col-4 col-xl-2">
            <WorkThumb
              src="./img/mountainskygoldensthumbnail.png"
              title="Mountain Sky Goldens"
              content={<MsgContent />}
            />
          </div>
          <div className="col-4 col-xl-2">
            <WorkThumb
              src="./img/fencethumbnail.png"
              title="Fence"
              content={<FenceContent />}
            />
          </div>

          <div className="col-4 col-xl-2">
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
          <div className="w-100 d-flex d-lg-none">
            <ScrollLink
              isDynamic
              currentClassName="is-current"
              className="btn m-3 ml-auto blue-bg hoverShadow hoverLift"
              to={"projects"}
              spy={true}
              smooth="easeInOutQuint"
              offset={-100}
              duration={1500}
              // spyThrottle={500}
              // onClick={handleClick}
            >
              Back to Projects{" "}
              <div className="d-inline ml-1">
                <SlArrowUp className="pb-1" />
              </div>
            </ScrollLink>
          </div>
          {/* <button
            type="button"
            className="btn m-3 ml-auto blue-bg hoverLift hoverShadow"
          >
            Back to Projects{" "}
            <div className="d-inline ml-1">
              <SlArrowUp className="pb-1" />
            </div>
          </button> */}
        </div>
      </WorkContext.Provider>
    </>
  )
}
export default WorkRow
