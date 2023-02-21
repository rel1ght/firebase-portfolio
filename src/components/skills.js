import React, { useState, useMemo } from "react"
import { without } from "lodash"
import { Tooltip } from "react-tooltip"
import { FaQuestionCircle } from "react-icons/fa"
import { skillDict, tags, categories, tagColors } from "../config/skillsList"
import ClickAwayListener from "react-click-away-listener"

export default function Skills() {
  const [enabledCategories, setEnabledCategories] = useState(
    Object.keys(categories).reduce((prevObj, categoryKey) => {
      return {
        ...prevObj,
        [categoryKey]:
          categories[categoryKey] === categories.personal ? false : true,
      }
    }, {})
  )

  const [enabledTags, setEnabledTags] = useState(
    Object.keys(tags).reduce((prevObj, tagKey) => {
      return {
        ...prevObj,
        [tagKey]: tags[tagKey] === tags.aquainted ? false : true,
      }
    }, {})
  )

  return (
    <>
      <section className="resume-section p-3 p-lg-5 d-flex">
        <div className="w-100" id="skills">
          <h2 className="mb-5 text-primary">Skills</h2>

          <FilterBar
            enabledTags={enabledTags}
            setEnabledTags={setEnabledTags}
            enabledCategories={enabledCategories}
            setEnabledCategories={setEnabledCategories}
          />
          {Object.keys(enabledCategories)
            .filter((categoryKey) => enabledCategories[categoryKey])
            .map((enabledCategoryKey) => {
              return (
                <CategorySection
                  category={enabledCategoryKey}
                  key={enabledCategoryKey}
                  enabledTags={enabledTags}
                />
              )
            })}
        </div>
      </section>
    </>
  )
}

function FilterBar({
  enabledTags,
  setEnabledTags,
  enabledCategories,
  setEnabledCategories,
}) {
  return (
    <div className="w-100 mt-n5">
      <div className="row">
        <div className="col-12 col-lg-auto">
          <h5>Categories</h5>
          <div className="ml-n1">
            {Object.keys(enabledCategories).map((categoryKey) => {
              return (
                <FilterButton
                  key={categoryKey}
                  text={categories[categoryKey]}
                  itemKey={categoryKey}
                  items={enabledCategories}
                  setItem={setEnabledCategories}
                />
              )
            })}
          </div>
        </div>
        <div className="col-12 col-lg-auto">
          <h5>Type</h5>
          <div className="ml-n1">
            {Object.keys(enabledTags).map((tagKey) => {
              return (
                <FilterButton
                  color={tagColors[tagKey]}
                  key={tagKey}
                  text={tags[tagKey]}
                  itemKey={tagKey}
                  items={enabledTags}
                  setItem={setEnabledTags}
                  striped={tagKey === tags.aquainted}
                />
              )
            })}
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col">
          <small className="text-muted">
            Hover or tap on a skill to see details
          </small>
        </div>
      </div> */}
    </div>
  )
}

function FilterButton({ itemKey, setItem, text, items, color = "light" }) {
  // aquainted button has special styling and a tooltip
  const isAquaintedButton = itemKey === tags.aquainted
  function handleClick() {
    setItem({ ...items, [itemKey]: !items[itemKey] })
  }
  const buttonVariant = items[itemKey] ? `btn-${color}` : `btn-outline-${color}`
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`btn  btn-xs hoverLift hoverExtraShadow clickPressDown ${buttonVariant} ${
        isAquaintedButton ? "striped-background" : ""
      } text-uppercase px-2 py-2 ml-0 mr-2 mb-2 rounded-pill position-relative`}
    >
      <div className={`d-flex align-items-center`}>
        <span className={`${isAquaintedButton ? "text-shadow" : ""}`}>
          {text}
        </span>
        {isAquaintedButton && (
          <div className="d-none d-lg-inline-block">
            <Tooltip
              positionStrategy="fixed"
              anchorId="aquaintedTooltip"
              place="right"
              offset={30}
              className="tooltip"
            >
              Skills I'm familiar with but haven't used as much or as recently
            </Tooltip>
            <div className="aquainted-button" id="aquaintedTooltip">
              <FaQuestionCircle />
            </div>
          </div>
        )}
      </div>
    </button>
  )
}

function CategorySection({ category, enabledTags }) {
  const filteredTags = useMemo(
    () => Object.keys(enabledTags).filter((tagKey) => enabledTags[tagKey]),
    [enabledTags]
  )
  const filteredCategorySkillKeys = useMemo(() => {
    const filtereSortedTest = Object.keys(skillDict)
      .filter(
        (skillKey) =>
          skillDict[skillKey].category === category &&
          // only include skills that have every matching enabled tag.
          // e.g. if a skill has the tool and aquainted tags, and the enabled tags are knowledge and tool,
          // don't show it, but do show a skill that only has the knowledge tag,
          // only has the tool tag, or has both the knowledge and tool tags
          !without(skillDict[skillKey].tags, ...filteredTags).length
      )
      .sort((skillKey1, skillKey2) => {
        if (
          skillDict[skillKey1].title.toLowerCase() <
          skillDict[skillKey2].title.toLowerCase()
        ) {
          return -1
        }
        if (
          skillDict[skillKey1].title.toLowerCase() >
          skillDict[skillKey2].title.toLowerCase()
        ) {
          return 1
        } else {
          return 0
        }
      })
    console.log("filtereSortedTest: ", filtereSortedTest)
    return filtereSortedTest
  }, [category, filteredTags])

  return (
    <div className="w-100 my-5">
      <h3 className="text-uppercase">{category}</h3>
      <div className="d-flex flex-wrap ml-n2">
        {filteredCategorySkillKeys.map((skillKey) => {
          return <Skill key={skillKey} skillKey={skillKey} />
        })}
      </div>
    </div>
  )
}

function Skill({ skillKey }) {
  const skill = skillDict[skillKey]
  const bgColors = skill.tags.map((tag) => `bg-${tagColors[tag]}`)
  const bgColor = bgColors[0]
  const striped = skill.tags.includes(tags.aquainted)
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false)
  const [isClickFocused, setIsClickFocused] = useState(false)
  function handleHoverIn() {
    if (!tooltipIsOpen) {
      setTooltipIsOpen(true)
    }
  }
  function handleHoverOut() {
    if (tooltipIsOpen && !isClickFocused) {
      setTooltipIsOpen(false)
    }
  }
  function handleClickOpen() {
    if (!isClickFocused) {
      setIsClickFocused(true)
    }
    if (!tooltipIsOpen) {
      setTooltipIsOpen(true)
    }
  }
  function handleClose() {
    if (isClickFocused) {
      setIsClickFocused(false)
    }
    if (tooltipIsOpen) {
      setTooltipIsOpen(false)
    }
  }
  return (
    <>
      <Tooltip
        positionStrategy="fixed"
        anchorId={skillKey}
        isOpen={tooltipIsOpen}
        className="tooltip"
      >
        {skill.description}
      </Tooltip>
      <ClickAwayListener onClickAway={handleClose}>
        <div
          onClick={handleClickOpen}
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
          id={skillKey}
          className={`rounded-pill hoverExtraShadow clickPressDown ${bgColor} ${
            striped ? "striped-background" : ""
          } mb-4 mr-2 activePointer`}
        >
          <div className="d-inline-flex flex-column">
            <div
              className={`rounded-pill px-3 py-1 d-flex align-items-center text-white`}
            >
              <div className="d-inline-block mr-2 pb-1">{skill.icon}</div>
              {skill.title}
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </>
  )
}
