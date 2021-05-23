import React from 'react'

import ProblemsData from '../assets/fe-problems'
import SimilarsData from '../assets/fs-similars'
import Card from './Card'
import { useState } from 'react'

const Feed = () => {
  const [problems, setProblems] = useState(ProblemsData.data)
  const [similars, setSimilars] = useState(SimilarsData.data)
  const [active, setActive] = useState(-1)
  const clickAction = (val) => {
    if (val === active) setActive(-1)
    else setActive(val)
  }
  const replaceAction = (val) => {
    setProblems(problems.map((item, index) =>
      index === active ? similars[val] : item
    ))
    setSimilars(similars.filter((_, index) => index !== val))
  }
  const addAction = (val) => {
    const temp = [...problems]
    setProblems([...temp.slice(0, active + 1), similars[val], ...temp.slice(active + 1)])
    setSimilars(similars.filter((_, index) => index !== val))
  }
  const removerAction = (val) => {
    setProblems(problems.filter((_, index) => index !== val))
  }


  return (
    <>
      <div className="container">
        <div className="problem">
          <div className="section-title">학습지 상세 편집</div>
          {problems.map((item, index) => <Card type="problem" active={index === active} leftButtonAction={clickAction} rightButtonAction={removerAction} key={index} data={item} index={index} />)}
        </div>
        <div className="similars">
          <div className="section-title">문항 교체/추가</div>
          {active >= 0 && <div className="section-subtitle">{problems[active].unitName}</div>}
          {active >= 0 ? similars.map((item, index) => <Card type="similar" leftButtonAction={addAction} rightButtonAction={replaceAction} key={index} data={item} index={index} />) :
            <div className="place-holder">
              <div className="sticky">
                <span className="btn">유사문항</span> 버튼을 누르면 <br />
                해당 문제의 유사 문항을 볼수 있습니다.
              </div>
            </div>}
        </div>
      </div>
    </>
  )
}

export default Feed