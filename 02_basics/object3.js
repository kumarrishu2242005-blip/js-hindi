/// destructuring 

const course={
    courseNmae: "js_hindi",
    coursePrice:999,
    courseInstructor:"hitesh"
}

// bad way to call => couse.coursrInstructor

const {courseInstructor}=course /// or if we want call courseInstructor is small way thenn  const {courseInstructor : CI}=course

console.log(courseInstructor);   // hitesh 


