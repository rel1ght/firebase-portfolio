import React, { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import { AnimatePresence, motion } from "framer-motion"
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
        <AnimatePresence>
          {contentExpanded && (
            <motion.div
              key={`workContent`}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className={`workContentRow row`}>
                <AnimatePresence>
                  <motion.div
                    key={`${activeThumbnail?.src}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    exit={{ opacity: 0 }}
                  >
                    <WorkContent content={currentContent} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </WorkContext.Provider>
    </>
  )
}
export default WorkRow
