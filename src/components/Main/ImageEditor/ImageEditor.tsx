import { useState } from 'react'
import { adjustments } from '../../../models/models'
const ImageEditor = ({ image }: any) => {
  const [adjustment, setAdjustment] = useState<adjustments>({
    brightness: 1,
    contrast: 1,
    saturate: 1,
    blur: 1,
  })

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <img
        src={image}
        style={{
          width: '300px',
          height: '300px',
        }}
        className={`filter ${
          adjustment.brightness === 50
            ? 'brightness-50'
            : adjustment.brightness === 100
            ? 'brightness-100'
            : adjustment.brightness === 150
            ? 'brightness-150'
            : adjustment.brightness === 200
            ? 'brightness-200'
            : ''
        } ${
          adjustment.contrast === 50
            ? 'contrast-50'
            : adjustment.contrast === 100
            ? 'contrast-100'
            : adjustment.contrast === 150
            ? 'contrast-150'
            : adjustment.contrast === 200
            ? 'contrast-200'
            : ''
        } ${
          adjustment.saturate === 50
            ? 'saturate-50'
            : adjustment.saturate === 100
            ? 'saturate-100'
            : adjustment.saturate === 150
            ? 'saturate-150'
            : adjustment.saturate === 200
            ? 'saturate-200'
            : ''
        } ${
          adjustment.blur === 50
            ? 'blur-sm'
            : adjustment.blur === 100
            ? 'blur'
            : adjustment.blur === 150
            ? 'blur-md'
            : adjustment.blur === 200
            ? 'blur-xl'
            : 'blur-none'
        }`}
      />
      <div className="flex flex-row justify-between w-full">
        <input
          onChange={(e) => {
            setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
          }}
          name="brightness"
          type="range"
          min="0"
          max="200"
          step="50"
          value={adjustment.brightness}
        />
        <input
          onChange={(e) => {
            setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
          }}
          name="contrast"
          type="range"
          min="0"
          max="200"
          step="50"
          value={adjustment.contrast}
        />
      </div>
      <div className="flex flex-row justify-between w-full">
        <input
          onChange={(e) => {
            setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
          }}
          name="saturate"
          type="range"
          min="0"
          max="200"
          step="50"
          value={adjustment.saturate}
        />
        <input
          onChange={(e) => {
            setAdjustment({ ...adjustment, [e.target.name]: Number(e.target.value) })
          }}
          name="blur"
          type="range"
          min="0"
          max="200"
          step="50"
          value={adjustment.blur}
        />
      </div>
    </div>
  )
}

export default ImageEditor
