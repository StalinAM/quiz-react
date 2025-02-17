export const ProgressBar = ({ progress }) => {
  return (
    <div className='progress-bar'>
      <div className='progress-fill' style={{ width: `${progress}%` }} />
    </div>
  )
}
