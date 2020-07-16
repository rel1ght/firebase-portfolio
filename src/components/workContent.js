import React, { useState } from "react"
import WorkContext from "./context"
function WorkContent({ content }) {
  console.log("content: ", content)
  const { contextValues } = React.useContext(WorkContext)
  const contentExpanded = contextValues.contentExpanded
  return (
    <>
      <div className={`interiorExpandedContent w-100`}>{content}</div>
    </>
  )
}
export default WorkContent
