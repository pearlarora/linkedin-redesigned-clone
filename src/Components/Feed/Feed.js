import React, { useEffect } from "react";
import "./Feed.css";
import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";
import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import { Avatar, Divider } from "@material-ui/core";
import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";
import axios from "axios";
import { getApi } from "../../utils/apis";
import Cookies from "js-cookie";
import { posts } from "../../data/posts";

function Feed() {
	const [input, setInput] = React.useState("");
	// const [posts, setPosts] = React.useState([]);
	// const getAllPosts = () => {
	// 	axios
	// 		.get(getApi("api/user/posts/myPosts"), {
	// 			headers: { access_token: `${Cookies.get("access-token")}` },
	// 		})
	// 		.then((res) => {
	// 			console.log(res);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };
	// useEffect(() => {
	// 	getAllPosts();
	// }, []);

	const sendPost = (e) => {
		e.preventDefault();

		setInput("");
	};

	const options = [
		{ Icon: InsertPhotoRoundedIcon, color: "#70B5F9", title: "Photo" },
		{ Icon: MovieCreationRoundedIcon, color: "#FFC107", title: "Video" },
		{ Icon: WorkRoundedIcon, color: "#F44336", title: "Job" },
		{ Icon: AssignmentRoundedIcon, color: "#FF9800", title: "Write Article" },
	];

	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<form action=''>
						<div className='feed__writeArea'>
							<Avatar src='https://media-exp1.licdn.com/dms/image/C4E03AQHRjLPA2E9-Gg/profile-displayphoto-shrink_400_400/0/1616477273357?e=1635379200&v=beta&t=uyHlw8T8hcTuHBfRKVe1aYnxIg_eQMAvikk8_UqglZY' />

							<textarea
								type='text'
								name=''
								placeholder='Share your thoughts...'
								id=''
								row='5'
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
						</div>
						<Divider />
						<div className='feed__inputOptions'>
							{options.map((option) => (
								<InputOption
									key={option.Icon}
									Icon={option.Icon}
									color={option.color}
									title={option.title}
								/>
							))}
							<button type='submit' className='feed__button' onClick={sendPost}>
								Publish
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className='feed_posts'>
				{posts.map(
					(
						{
							message,
							number_of_likes,
							number_of_comments,
							tags,
							time,
							active,
							postBy,
							likes,
							comments,
						},
						id
					) => (
						<Post
							key={id}
							message={message}
							number_of_likes={number_of_likes}
							number_of_comments={number_of_comments}
							tags={tags}
							time={time}
							active={active}
							postBy={postBy}
							likes={likes}
							comments={comments}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default Feed;
