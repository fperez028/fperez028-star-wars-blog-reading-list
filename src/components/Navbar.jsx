import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store } = useGlobalReducer();
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>

				<div className="ml-auto d-flex align-items-center gap-3">
					<div className="dropdown">
						<button
							className="btn btn-warning dropdown-toggle"
							type="button"
							id="favoritesDropdown"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favorites ({store.favorites.length})
						</button>
						<ul
							className="dropdown-menu dropdown-menu-end"
							aria-labelledby="favoritesDropdown"
						>
							{store.favorites.length === 0 ? (
								<li>
									<span className="dropdown-item text-muted">No favorites yet</span>
								</li>
							) : (
								store.favorites.map((fav, index) => (
									<li key={index}>
										<button
											className="dropdown-item"
											onClick={() => navigate(`/${fav.type}/${fav.uid}`)}
										>
											{fav.name} ({fav.type})
										</button>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
