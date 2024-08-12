import { Link } from "react-router-dom";

function LinkComponent({ children, to }) {
    return (
        <Link to={to} className="font-semibold text-primary hover:underline">
            {children}
        </Link>
    );
}

export default LinkComponent;
