import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-400 w-1/3 h-96 box-content p-10 rounded-lg m-2 ml-24">
      <div className="flex flex-col justify-center items-center w-content">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton style={{ width: '96px', height: '96px', borderRadius: '8px' }} count={1} />
          <p className="text-left flex flex-col items-center w-full">
            <Skeleton style={{ margin: '8px 0 8px 0', width: '300px', height: '20px' }} count={1} />
          </p>
          <div className="text-left flex flex-col items-start w-full">
            <span>
              <Skeleton style={{ width: '100px' }} count={1} />
            </span>
            <p>
              <Skeleton style={{ width: '300px', height: '100px' }} />
            </p>
            <h4 className="mt-2">
              <Skeleton style={{ width: '100px' }} />
            </h4>
          </div>
          <div className="flex flex-row w-full justify-center items-center">
            <Skeleton style={{ width: '48px', height: '34px' }} />
            <Skeleton style={{ width: '48px', height: '34px', marginLeft: '12px' }} />
          </div>
        </SkeletonTheme>
      </div>
    </div>
  )
}

export default SkeletonComponent
