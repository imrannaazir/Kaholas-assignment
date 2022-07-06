import Reviews from "./Reviews";
import Image from "next/image";
const CourseInfo = ({ course }) => {
    const teacher_src = course.teacher_photo
    return (
        <div className="flex flex-col gap-2">
            {/* teacher's name and image */}
            <div className="flex items-center gap-2 my-4">
                <Image className="rounded-full" src={teacher_src} width="30px" height="30px" alt={course.teacher_name} />
                <h4 className="text-lg text-[#503DD4]">{course.teacher_name}</h4>
            </div>
            {/* reviews */}
            <div>
                {/* reviews for teacher*/}
                <div className="flex md:items-center gap-1 text-[#A8A8A8]"><Reviews /> {course.teacher_reviews} total reviews for this teacher</div>
                {/* reviews for this course */}
                <div className="flex items-center gap-1  text-[#A8A8A8]"><Reviews /> {course.course_reviews} reviews for this class</div>
            </div>
            {/* completed by learners */}
            <p className="text-xl">Completed by {course.learners} learners</p>
        </div>
    );
};

export default CourseInfo;