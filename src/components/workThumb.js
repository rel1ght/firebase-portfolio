import React, { useState } from "react"
import WorkContext from "./context"
function WorkThumb({ src, title, content }) {
  const { contextValues } = React.useContext(WorkContext)
  const thumbnailClick = contextValues.thumbnailClick
  const activeThumbnail = contextValues.activeThumbnail

  const ref = React.useRef(null)
  return (
    <>
      <div className="row justify-content-center maxWidth mx-auto">
        <img
          src={src}
          ref={ref}
          onClick={e => thumbnailClick(e, ref, content)}
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
      <div className="row justify-content-center">
        <img
          src="../img/arrow.svg"
          className={`workArrow w-25 mx-auto ${
            ref.current === activeThumbnail ? "d-block" : "d-none"
          }`}
        ></img>
      </div>
    </>
  )
}
export default WorkThumb
