import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookMark, handleMarkAsRead }) => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);
	return (
		<div className="sm:w-full w-2/3">
			<h1 className="text-3xl">Blogs</h1>

			{blogs.map((blog) => (
				<Blog
					key={blog.id}
					blog={blog}
					handleBookMark={handleBookMark}
					handleMarkAsRead={handleMarkAsRead}
				></Blog>
			))}
		</div>
	);
};

Blogs.propTypes = {
	handleBookMark: PropTypes.func.isRequired,
	handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
