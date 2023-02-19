import React from 'react'
import { adjustmentsType, Cart } from '../../../models/models'

type ImageEditorProps = {
  image: any
  setProduct: React.Dispatch<React.SetStateAction<Cart>>
  adjustments?: adjustmentsType
}

const ImageEditor: React.FC<ImageEditorProps> = ({
  image,
  setProduct,
  adjustments,
}) => {
  
  const getImageStyles = () => {
    const filters = `brightness(${adjustments?.brightness}%) contrast(${adjustments?.contrast}%) saturate(${adjustments?.saturate}%) blur(${adjustments?.blur}px)`
    return { filter: filters }
  }

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <img src={image} style={getImageStyles()} className="w-72 h-72" />
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <input
            onChange={(e) => {
              if (!adjustments) return
              setProduct((prevState) => ({
                ...prevState,
                adjustments: {
                  ...adjustments,
                  brightness: e.target.valueAsNumber,
                },
              }))
            }}
            name="brightness"
            type="range"
            min="0"
            max="100"
            step="25"
            value={adjustments?.brightness}
          />
          <span className="text-blue-600 font-bold">brightness {adjustments?.brightness}%</span>
        </div>
        <div className="flex flex-col">
          <input
            onChange={(e) => {
              if (!adjustments) return
              setProduct((prevState) => ({
                ...prevState,
                adjustments: {
                  ...adjustments,
                  contrast: e.target.valueAsNumber,
                },
              }))
            }}
            name="contrast"
            type="range"
            min="0"
            max="100"
            step="25"
            value={adjustments?.contrast}
          />
          <span className="text-blue-600 font-bold">contrast {adjustments?.contrast}%</span>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <input
            onChange={(e) => {
              if (!adjustments) return
              setProduct((prevState) => ({
                ...prevState,
                adjustments: {
                  ...adjustments,
                  saturate: e.target.valueAsNumber,
                },
              }))
            }}
            name="saturate"
            type="range"
            min="0"
            max="100"
            step="25"
            value={adjustments?.saturate}
          />
          <span className="text-blue-600 font-bold">saturate {adjustments?.saturate}%</span>
        </div>
        <div className="flex flex-col">
          <input
            onChange={(e) => {
              if (!adjustments) return
              setProduct((prevState) => ({
                ...prevState,
                adjustments: {
                  ...adjustments,
                  blur: e.target.valueAsNumber,
                },
              }))
            }}
            name="blur"
            type="range"
            min="0"
            max="10"
            step="1"
            value={adjustments?.blur}
          />
          <span className="text-blue-600 font-bold">blur {adjustments?.blur}px</span>
        </div>
      </div>
    </div>
  )
}

export default ImageEditor
