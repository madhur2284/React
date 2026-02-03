import {useState} from 'react'
function Btn({color, onClick}) {
    return(
        <button style={
            {
                backgroundColor: color,
                border: 'none',
                padding: 5,
                margin: 10,
                borderRadius: 15,
                color: ['black', 'purple', 'blue'].includes(color)?'white':'black',

            }
        }

        onClick={()=>onClick(color)}>{color}</button>
    )
}

export default Btn;