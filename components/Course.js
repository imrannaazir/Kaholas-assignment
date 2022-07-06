import Image from "next/image";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Buttons from "./Buttons";
import CourseInfo from "./CourseInfo";
//#503DD4 #F9C847 #262626 #A8A8A8
const Course = ({ course }) => {
    console.log("course", course);
    const course_src = course.course_photo

    return (
        <div className='max-w-xl lg:max-w-5xl mx-auto my-12 px-4'>
            <h1 className='text-4xl font-bold text-[#262626] '>{course.title}</h1>
            <h4 className='flex items-center gap-2 text-xl font-semibold  text-[#A8A8A8]'>{course.type}<AiOutlineQuestionCircle /></h4>

            <div className="grid lg:grid-cols-2 mt-14 gap-10">
                <div>
                    <p className="text-xl">{course.description}</p>
                    {/*  teacher*/}
                    <div className="hidden lg:block">
                        <CourseInfo course={course} />
                    </div>
                    <Buttons />
                </div>
                {/* course img */}
                <Image loader={() => course_src} src={course_src} alt={course.teacher_name} width="550" height="350" />
                {/*  teacher*/}
                <div className="lg:hidden">
                    <CourseInfo course={course} />
                </div>
            </div>
        </div>
    );
};

export default Course;