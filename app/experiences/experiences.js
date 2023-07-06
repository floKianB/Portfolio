import React from 'react'
import EachExperience from './eachExperience'

function Experiences() {
    return (
        <div>
            <ol className="group/list">
                <li className="mb-12">
                    <EachExperience 
                        date = "2021 — Sep 2022"
                        position = "Software Developer"
                        at = "Awitel"
                        loc = "Toronto, ON"
                        description = "As a Software Developer at Awitel INC, I gained experience in developing React JS projects while assisting the design team. I contributed to innovative applications and collaborated on enhancing user interfaces."
                    />
                </li>
            </ol>
        </div>
    )
}

export default Experiences