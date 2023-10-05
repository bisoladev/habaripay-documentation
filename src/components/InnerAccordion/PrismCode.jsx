import React from 'react'
import { Highlight, themes } from "prism-react-renderer"
import duotoneLight from "prism-react-renderer/themes/nightOwl"


const PrismCode = ({ codeBlock }) => {
  return (
    <Highlight
      theme={duotoneLight}
      code={codeBlock}
      language="jsx"
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default PrismCode