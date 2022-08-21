import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react';

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },{
        id: 4,
        rating: 9,
        text: 'This is feedback item 4. Lessgo everyone'
    }
    ])

    // delete feedback
    const deleteFeedback = (id)=>{
        if (window.confirm('Are you sure you want to delete the feedback?')){
            setFeedback(feedback.filter((item)=> item.id !== id))
            }
        }

    // update feedback
    const updateFeedback = ( id, updItem ) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem} : item))
    }
    // addfeedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false,
    })

    // setfeedback for Edit
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider value = {{
        feedback,
        deleteFeedback, 
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext  