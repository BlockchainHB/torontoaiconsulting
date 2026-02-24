import type { SVGProps } from 'react'

const ClaudeCode = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 256">
        {/* Terminal window */}
        <path d="M224 16H32a32.036 32.036 0 0 0-32 32v160a32.036 32.036 0 0 0 32 32h192a32.036 32.036 0 0 0 32-32V48a32.036 32.036 0 0 0-32-32ZM50.146 131.882l40-40a8 8 0 0 1 11.314 11.314L67.314 137.34l34.146 34.146a8 8 0 0 1-11.314 11.314l-40-40a8 8 0 0 1 0-11.314Zm157.708 48.972H128a8 8 0 0 1 0-16h79.854a8 8 0 0 1 0 16Z" />
    </svg>
)

export { ClaudeCode }
