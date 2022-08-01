import React, { useState, useEffect } from "react";
import usePersist from "../Persist";

function AddForm(props) {
    const [memo, setMemo] = usePersist('memo', [])
    const [message, setMessage] = useState('')

    const doChange = (e) => {
        setMessage(e.target.value)
    }

    const doAction = (e) => {
        const data = {
            message: message,
            created: new Date()
        }
        memo.unshift(data)
        setMemo(memo)
        setMessage('')
    }

    return (
        <form onSubmit={doAction} action=''>
            <div className="form-group row">
                <input className="form-control-sm col"
                    type="text" onChange={doChange} value={message} required />
                <input className="btn btn-primary btn-sm col-2" type="submit" value='Add' />
            </div>
        </form>
    )
}

export default AddForm