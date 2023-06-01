
import React from 'react';

const SkillProgressLineSVG = ({ color = 'grey', parentage = 10, ...rest }) => {
    console.log(parentage)
    return (
        <svg
            {...rest}
            viewBox="0 0 100 1"
        >
            <path
                className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth={1}
                fillOpacity={0}
            />
            <path
                className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke={color}
                strokeWidth={1}
                fillOpacity={0}
                style={{ strokeDasharray: `${parentage}px, 100px`, strokeDashoffset: '0px', transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s' }}
            />
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default SkillProgressLineSVG;