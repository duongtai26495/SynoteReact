import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getDiary, updateDiary } from '../config/api_functions'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useStore } from '../store';
import { updateLoginState } from '../store/actions';
import MyButton from '../components/MyButton';
const DiaryDetails = () => {

  useEffect(() => {
    getDiaryDetails()
  }, [])

  const { id } = useParams()
  const navigate = useNavigate()
  const [state, dispatch] = useStore()
  const { userLoginState } = state


  const [content, setContent] = useState('')
  const [display, setDisplay] = useState(true)

  const getDiaryDetails = async () => {
    const result = await getDiary(id)
    setContent(result.content)
    setDisplay(result.display)
  }

  const handleEditDiary = async () => {
    if(content != ''){
      var diary = {
        "content":content,
        "display":display,
        "id":id,
      }
  
      let result = await updateDiary(diary)
      console.log(result)
      if(result == 'SUCCESS'){
        dispatch(updateLoginState(!userLoginState))
        navigate("/")
      }
    }
    
  }

  return (
    <div className='w-full p-2'>
      <h4 className='p-2'>Add new</h4>
      <ReactQuill 
      className='content-field w-full rounded-md bg-slate-200 text-black p-2' 
      theme="snow" 
      value={content} 
      onChange={setContent} />
      <MyButton onClick={handleEditDiary} title={'Save'} icon={<i className="fa-solid fa-floppy-disk"></i>} />
      <MyButton onClick={() => navigate("/")} title={'Back'} icon={<i className="fa-regular fa-hand-point-left"></i>} />
    </div>
  )
}

export default DiaryDetails