import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));  
  const user2 = JSON.parse(localStorage.getItem("user2"));
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");  
        localStorage.removeItem("user2"); // Remove user2 as well
        window.location.reload();  
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">User Profile</h1>
        {user || user2 ? (
          <div>
            {user && (
              <>
                <p className="text-lg">
                  <strong>Name:</strong> {user.displayName || "N/A"}
                </p>
                <p className="text-lg">
                  <strong>Email:</strong> {user.email}
                </p>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-20 h-20 rounded-full mt-4 mx-auto"
                  />
                )}
              </>
            )}
            {user2 && (
              <>
                <p className="text-lg mt-4">
                  <strong>User2 Email:</strong> {user2.email}
                </p>
                <p className="text-lg">
                  <strong>User2 UID:</strong> {user2.uid}
                </p>
              </>
            )}
            <button
              onClick={handleSignOut}
              className="px-2 text-black font-semibold border border-black py-2 rounded-md hover:bg-black hover:text-white transition duration-200 mt-4"
            >
              Log Out
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-600">No user data available.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
