
import { FunctionComponent } from 'react';

export type Props = React.HTMLAttributes<HTMLElement> & {
    title?: String;
    description?: String;
    since?: String;
}

const Title: FunctionComponent<Props> = ({title, description, since, children}) => {
    return (
        <header className='title'>
            <h1>
                { title}
            </h1>
            { (since != null && since != "") ? <div className="since">Available since BSML Quest version v{since}</div> : <div></div>}
            <br/>
            <p>{ description }</p>
            <div className='spacer'/>
            { children }
            
            { children != null ? <div className='spacer'/> : <></>}
        </header>
    )
}

export default (Title);