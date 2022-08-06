
import { FunctionComponent } from 'react';

export type Props = React.HTMLAttributes<HTMLElement> & {
    title?: String;
    description?: String;
}

const Title: FunctionComponent<Props> = ({title, description, children}) => {
    return (
        <header className='title'>
            <h1>
                { title}
            </h1>
            <p>{ description }</p>
            <div className='spacer'/>
            { children }
            
            { children != null ? <div className='spacer'/> : <></>}
        </header>
    )
}

export default (Title);