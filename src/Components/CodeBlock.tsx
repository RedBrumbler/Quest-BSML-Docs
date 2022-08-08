import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
    language?: string;
    value: string;
}

const CodeBlock: React.FC<Props> = ({ language, value }) => {
    if (language == null) {
        language = 'cpp';
    }
    return (
        <SyntaxHighlighter
            language={language}
            style={materialDark}
            customStyle={preStyles}
            wrapLines={true}
            showLineNumbers
            className='code-block'
        >
            {value}
        </SyntaxHighlighter>
    )
}

const preStyles = {
    fontSize: '0.8rem',
}

export default CodeBlock;