import React from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';
const DiaryRow = ({ diary }) => {

    let content = diary.content.slice(0, 100)


    return (
        <Link to={'/diary/' + diary.id} className=' diary-row w-full p-2 m-2 bg-white rounded-md mt-2 flex flex-col'>
            <div className='diary_content'>
                {parse(content)}
                <form>
                    
                </form>
            </div>
            <p className='diary_time mt-2 w-full text-end'>{diary.last_edited}</p>
        </Link>
    )
}

export default DiaryRow