import { FunctionComponent } from 'react';

export type Props = React.HTMLAttributes<HTMLElement> & {
    title?: String;
}

const SubTitle: FunctionComponent<Props> = ({title, children}) => {
    return (
        <header className='subtitle'>
            <h3>
                { title}
            </h3>
            { children }
            <div className='spacer'/>
        </header>
    )
}

export default (SubTitle);