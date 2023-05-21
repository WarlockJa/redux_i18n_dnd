import { useState } from 'react'
import './App.css'
import { useAppSelector } from './app/hooks'
import { selectListItems, setListItems } from './listItemsSlice'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './util/LanguageSwitcher'

function App() {
  const { t } = useTranslation(['translation'])
  // redux store
  const listItems = useAppSelector(selectListItems)
  const dispatch = useDispatch()
  // drag and drop state
  const [dragNDrop, setDragNDrop] = useState<{ drag: number | undefined, drop: number | undefined }>({ drag: undefined, drop: undefined })

  // drag and drop methods
  const dragStart = (position: number) => {
      setDragNDrop({ ...dragNDrop, drag: position })
    }
    
    const dragEnter = (position: number) => {
      setDragNDrop({ ...dragNDrop, drop: position })
  }

  const dragDrop = async () => {
    if(dragNDrop.drag !== undefined && dragNDrop.drop !== undefined) {
      const updatedList = [...listItems]
      const dragItemContent = updatedList[dragNDrop.drag]
      updatedList.splice(dragNDrop.drag, 1)
      updatedList.splice(dragNDrop.drop, 0, dragItemContent)
      setDragNDrop({ drag: undefined, drop: undefined })
      
      dispatch(setListItems(updatedList))
    }
  }

  const content = listItems.map((item, index) =>
    <div
      key={index}
      className='draggableItem'
      onDragStart={() => dragStart(index)}
      onDragEnter={() => dragEnter(index)}
      onDragEnd={() => dragDrop()}
      draggable
    >{t(item)}</div>
  )

  return (
    <>
      <div>
        <LanguageSwitcher fullDescription={true} />
        {content}
      </div>
    </>
  )
}

export default App
