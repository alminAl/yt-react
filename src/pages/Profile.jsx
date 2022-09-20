import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <h2>Profile</h2>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
