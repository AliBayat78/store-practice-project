import { useState } from 'react'
import { adjustments } from '../../../models/models'
const ImageEditor = ({ image }: any) => {
  const [adjustment, setAdjustment] = useState<adjustments>({
    brightness: 100,
    contrast: 100,
    saturate: 100,
    blur: 0,
  })

  const getImageStyles = () => {
    const filters = `brightness(${adjustment.brightness}%) contrast(${adjustment.contrast}%) saturate(${adjustment.saturate}%) blur(${adjustment.blur}px)`
    return { filter: filters }
  }

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <img src={image} style={getImageStyles()} className="w-72 h-72" />
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <input
            onChange={(e) => {
              setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
            }}
            name="brightness"
            type="range"
            min="0"
            max="100"
            step="25"
            value={adjustment.brightness}
          />
          <span className="text-blue-600 font-bold">brightness {adjustment.brightness}%</span>
        </div>
        <div className="flex flex-col">
          <input
            onChange={(e) => {
              setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
            }}
            name="contrast"
            type="range"
            min="0"
            max="100"
            step="25"
            value={adjustment.contrast}
          />
          <span className="text-blue-600 font-bold">contrast {adjustment.contrast}%</span>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <input
            onChange={(e) => {
              setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
            }}
            name="saturate"
            type="range"
            min="0"
            max="100"
            step="25"
            value={adjustment.saturate}
          />
          <span className="text-blue-600 font-bold">saturate {adjustment.saturate}%</span>
        </div>
        <div className="flex flex-col">
          <input
            onChange={(e) => {
              setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
            }}
            name="blur"
            type="range"
            min="0"
            max="10"
            step="1"
            value={adjustment.blur}
          />
          <span className="text-blue-600 font-bold">blur {adjustment.blur}px</span>
        </div>
      </div>
    </div>
  )
}

export default ImageEditor
