import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changePageCount } from '../../store/slices/FilmsSlice'
import './Button.css'

const Button = () => {
    const dispatch = useAppDispatch()
    const pageCount = useAppSelector((state)=>state.filmsData.pageCount)

    const changePageFunc = (newPageCount:number) => {
        dispatch(changePageCount(newPageCount))
    }

  return (
    <div className='pageCount'>
        <button onClick={() => changePageFunc(pageCount)}>{pageCount}</button>
        <button onClick={() => changePageFunc(pageCount + 1)}>{pageCount + 1}</button>
        <button onClick={() => changePageFunc(pageCount + 2)}>{pageCount + 2}</button>
        <button onClick={() => changePageFunc(pageCount + 1)}>+</button>
    </div>
  )
}

export default Button