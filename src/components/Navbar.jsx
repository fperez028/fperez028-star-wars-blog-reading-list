import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	const removeFavorite = (favToRemove) => {
		dispatch({ type: "TOGGLE_FAVORITE", payload: favToRemove });
	};

	return (
		<nav className="navbar bg-dark">
			<div className="container d-flex justify-content-between my-0">
				<Link to="/" className="text-light text-decoration-none">
					<i className="fa-solid fa-jedi fs-1"></i>
				</Link>

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
								<li key={index} className="d-flex justify-content-between align-items-center px-2">
									<button
										className="dropdown-item border-0 bg-transparent p-0 text-start flex-grow-1"
										onClick={() => navigate(`/${fav.type}/${fav.uid}`)}
									>
										{fav.name} ({fav.type})
									</button>
									<i
										className="fa-regular fa-trash-can ms-2"
										role="button"
										onClick={(e) => {
											e.stopPropagation();
											e.preventDefault();
											removeFavorite(fav);
										}}
									></i>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
