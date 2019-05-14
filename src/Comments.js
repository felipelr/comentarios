import React from 'react'
import Comment from './Comment'

// ({comments}) é em referencia a props.comments
const Comments = ({comments}) => {
    const keys = Object.keys(comments)
    return (
        <div>
            {
                keys.map(key => <Comment key={key} c={comments[key]} />)
            }
        </div>
    )
}
export default Comments