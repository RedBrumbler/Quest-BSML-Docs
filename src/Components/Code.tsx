import { FunctionComponent } from 'react';

export type Props = React.HTMLAttributes<HTMLElement> & {
    title?: String;
}

const Code: FunctionComponent<Props> = ({title, children}) => {
    return (
        <div className='code-block'>
            {title != null ? <span className='code-title'>{title}</span> : <></>}
            <pre><code>
                { children }
            </code></pre>
        </div>
    )
}

export default (Code);