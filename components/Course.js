import Image from "next/image";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Buttons from "./Buttons";
import Reviews from "./Reviews";
//#503DD4 #F9C847 #262626 #A8A8A8
const Course = ({ course }) => {
    console.log("course", course);
    const course_src = course.course_photo
    const teacher_src = course.teacher_photo
    return (
        <div className='max-w-5xl mx-auto mt-12'>
            <h1 className='text-4xl font-bold'>{course.title}</h1>
            <h4 className='flex items-center gap-2 text-xl font-semibold text-gray-500 '>{course.type}<AiOutlineQuestionCircle /></h4>
            <div className="grid grid-cols-2">
                <div>
                    {/*  teacher*/}
                    <p>{course.description}</p>
                    <div className="flex items-center gap-2">

                        <Image className="rounded-full" loader={() => teacher_src} src={teacher_src} width="30" height="30" alt={course.teacher_name} />
                        <h4 className="text-lg">{course.teacher_name}</h4>
                    </div>
                    {/* reviews for teacher*/}
                    <p className="flex items-center"><Reviews /> {course.teacher_reviews}total reviews for this teacher</p>
                    {/* reviews for this course */}
                    <p className="flex items-center"><Reviews /> {course.course_reviews}reviews for this class</p>
                    {/* completed by learners */}
                    <p>Completed by {course.learners} learners</p>
                    <Buttons />
                </div>
                {/* course img */}
                <Image loader={() => course_src} src={course_src} alt={course.teacher_name} width="550" height="350" />

            </div>
        </div>
    );
};

export default Course;