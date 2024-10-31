import type { PropsWithChildren } from "react";
import Header from "./Header";
import Presentation from "./Presentation";
import { student_info } from "../config/student_info";
import Experiences from "./Experiences";



export default function Layout(props: PropsWithChildren<{}>) {
    const { children } = props;
    const { student, degree, email, points, experiences } = student_info;

    return (
        <div id="grid-container">
                <Header student={""} degree={""} points={0} email={email} />
            <main>
                <Presentation student={student} degree={degree} points={points} email={email} />
                <Experiences experiences={experiences} description={""} id={""} />
                {children}
            </main>
             
        </div>
    );
}