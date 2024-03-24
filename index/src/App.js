import { useState } from "react";

let user_1 = {
  name: "Jadon Nielsen",
  discipline: "Computer Science",
  interest: "High-Performance Computing",
};

let user_2 = {
  name: "Amber Gehron",
  discipline: "Statistics",
  interest: "Differential Equations",
};

let user_3 = {
  name: "Genia Kapelonis",
  discipline: "UX Design",
  interest: "UX Research",
};

let user_4 = {
  name: "Sara Saaidi",
  discipline: "Computer Science",
  interest: "Full-Stack Development",
};

let user_list = [user_1, user_2, user_3, user_4];

const listUsers = user_list.map((user) => (
  <li
    key={user.name}
    style={{
      color: user.discipline === "Computer Science" ? "darkgreen" : "darkblue",
    }}
  >
    {user.name}, {user.discipline}, {user.interest}
  </li>
));

function ListUsers() {
  return <ul>{listUsers}</ul>;
}

export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Welcome to my {user_1.name} app</h1>
      <h1>I like to do {user_1.discipline}</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <ListUsers />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>I've been clicked {count} times!</button>;
}
