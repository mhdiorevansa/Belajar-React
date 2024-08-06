import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
	const profile = useLogin();
	return (
		<div>
			<h1>profile</h1>
			<p>nama saya {profile}</p>
		</div>
	);
};

export default ProfilePage;
