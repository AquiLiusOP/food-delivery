import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import auth from "../firebase.config";
// import Spinner from "../Pages/Shared/Spinner";

const PrivateRoute = ({ children }) => {
	const [user, loading] = useAuthState(auth);
	const location = useLocation();
	if (loading) {
		return <Spinner />;
	}
	if (!user) {
		return (
			<Navigate to="/login" state={{ from: location }} replace={true} />
		);
	}
	return children;
};

export default PrivateRoute;
