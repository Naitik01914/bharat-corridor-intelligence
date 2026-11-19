import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <article className="page">
      <h1>This page is not on the map.</h1>
      <p className="prose">The scan guide and the interactive map are still available.</p>
      <div className="home-actions">
        <Link className="button primary" to="/scan">Go to /scan</Link>
        <Link className="button" to="/">Home</Link>
      </div>
    </article>
  );
}
