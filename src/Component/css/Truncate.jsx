import React from 'react'

const Truncate = () => {
    return (
        <div>
            {/* if need to truncate the words after 30 characters, then use the following css */}
            <p className="truncate max-w-[30ch]">This is a long text that will be truncated after 30 characters</p>
        </div>

    )
}

export default Truncate