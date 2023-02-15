import React, { useState, useEffect } from "react"
import WorkContext from "./context"
import { useMediaQuery } from "react-responsive"
function WorkThumb({ src, title, content }) {
  const { contextValues } = React.useContext(WorkContext)
  const thumbnailClick = contextValues.thumbnailClick
  const activeThumbnail = contextValues.activeThumbnail
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const ref = React.useRef(null)
  useEffect(() => {
    if (!isTabletOrMobile) {
      if (title === "Deepict") {
        thumbnailClick(null, ref, content)
      }
    }
  }, [isTabletOrMobile])
  return (
    <>
      <div className="row justify-content-center maxWidth mx-auto">
        <img
          alt="thumbnail"
          src={src}
          ref={ref}
          onClick={(e) => thumbnailClick(e, ref, content)}
          className={`workThumbnail rounded img-fluid mb-2 ${
            ref.current === activeThumbnail ? "activeThumbnail" : ""
          }`}
        ></img>
      </div>
      <div className="row justify-content-center d-none d-md-block">
        <h4
          className={`text-center ${
            ref.current === activeThumbnail ? "orange" : "blue"
          }`}
        >
          {title}
        </h4>
      </div>
      {/* <div className="row justify-content-center">
        <img
          src="../img/arrow.svg"
          className={`workArrow w-25 mx-auto ${
            ref.current === activeThumbnail ? "d-block" : "d-none"
          }`}
        ></img>
      </div> */}
    </>
  )
}
export default WorkThumb
