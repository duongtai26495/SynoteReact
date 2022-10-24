import React, { useState } from 'react'
import MyButton from '../components/MyButton'
import { addNewDiary } from '../config/api_functions'
import { useStore } from '../store'
import {updateLoginState } from '../store/actions'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Link, useNavigate } from 'react-router-dom'

const AddDiary = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [state, dispatch] = useStore()
    const [content, setContent] = useState('')
    const {userLoginState} = state
    const handleNewDiary = async () =>{
      setLoading(true)
        var diary = {
          "content":content,
          "display":true
        }
        await addNewDiary(diary)
        dispatch(updateLoginState(!userLoginState))
        navigate("/")
        setLoading(false)
        
    }

  return (
   <div className='w-full p-2'>
        <h4 className='p-2'>Add new</h4>
        <ReactQuill className='content-field w-full rounded-md bg-slate-200 text-black p-2' theme="snow" value={content} onChange={setContent} />
        <MyButton color={'bg-teal-700 text-white'} loading={loading} onClick={handleNewDiary} title={'Save'} icon={<i className="fa-solid fa-floppy-disk"></i>} />
        <Link to="/" ><MyButton color={' bg-cyan-600 text-white'} title={'Back'} icon={<i className="fa-regular fa-hand-point-left"></i>}/></Link>
   </div>
  )
}

export default AddDiary