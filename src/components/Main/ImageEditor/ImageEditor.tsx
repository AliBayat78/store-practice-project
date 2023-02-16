import { useState } from 'react'
import { adjustments } from '../../../models/models'
import styled, { css } from 'styled-components'
const ImageEditor = ({ image }: any) => {
  const [adjustment, setAdjustment] = useState<adjustments>({
    brightness: 1,
    contrast: 1,
    saturation: 1,
    sharpness: 1,
  })

  let ImageComponent = styled.img.attrs({
    src: `${image}`,
  })`
  width: 300px,
  height: 300px,
  `

  return (
    <div className="flex flex-col justify-between items-center h-full">
      {/* <img
        src={image}
        style={{
          width: '300px',
          height: '300px',
          filter: `brightness(${adjustment.brightness}%), contrast(${adjustment.contrast}%), saturation(${adjustment.saturation}%)`,
        }}
      /> */}
      <div className="flex flex-row justify-between w-full">
        <input
          onChange={(e) => {
            setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
          }}
          name="brightness"
          type="range"
          min="0"
          max="100"
          value={adjustment.brightness}
        />
        <input
          onChange={(e) => {
            setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
          }}
          name="contrast"
          type="range"
          min="0"
          max="100"
          value={adjustment.contrast}
        />
      </div>
      <div className="flex flex-row justify-between w-full">
        <input
          onChange={(e) => {
            setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
          }}
          name="saturation"
          type="range"
          min="0"
          max="100"
          value={adjustment.saturation}
        />
        <input
          onChange={(e) => {
            setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
          }}
          name="sharpness"
          type="range"
          min="0"
          max="100"
          value={adjustment.sharpness}
        />
      </div>
    </div>
  )
}

export default ImageEditor
