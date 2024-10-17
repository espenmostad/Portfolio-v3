import { ProjectProps } from './types';
import type { PropsWithChildren } from "react";

export default function Project(props: Readonly<PropsWithChildren<ProjectProps>>) {
    const { title, category, description, children } = props
    return (
       <article className='project'>
           <h3>{title}</h3>
           {description}
           <p>Category: {category}</p>
           {children}
       </article>
    )
}