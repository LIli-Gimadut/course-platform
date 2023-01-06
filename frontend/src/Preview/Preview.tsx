import axios from "axios";
import { useEffect, useState } from "react";

function Preview() {
  const [courses, setCourses] = useState([] as { title: string }[]);
  //   const courses = [{ title: "Заголовок" }, { title: "Тимур красавчик" }];

  useEffect(() => {
    axios
      .get("http://localhost:3000/app/all-courses")
      .then(function (response) {
        // handle success
        console.log(response);
        setCourses(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setCourses([]);
      });
  }, []);

  return (
    <div className="info">
      <div className="menu">
        <div className="top"> Один здесь? </div>
        <ul className="ul_1">
          <li>Основная информация</li>
          <li>Личный кабинет</li>
          <li>Поиск</li>
          <li>Ещё что-нибудь</li>
        </ul>
      </div>

      <div className="main">
        {courses.map((course, index) => (
          <div className="main_1">{course.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Preview;
