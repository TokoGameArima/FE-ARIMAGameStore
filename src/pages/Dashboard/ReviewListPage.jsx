import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../../api/productApi";
import { getReviewsByGame } from "../../api/reviewApi";

const ReviewListPage = () => {
  const { id } = useParams(); // gameId
  const [game, setGame] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const gameData = await getProductById(id);
        const reviewData = await getReviewsByGame(id);
        setGame(gameData);
        setReviews(reviewData);
      } catch (err) {
        console.error("Failed to load data");
      }
    };
    fetch();
  }, [id]);

  return (
    <div className="min-h-screen bg-[#0f021e] text-white p-6">
      <h1 className="text-2xl font-bold mb-2">🗣️ Reviews for {game?.name}</h1>

      <Link to="/games" className="text-sm text-indigo-400 hover:underline mb-6 inline-block">
        ← Back to Games
      </Link>

      {reviews.length === 0 ? (
        <p className="text-gray-400">No reviews yet for this game.</p>
      ) : (
        <div className="space-y-4 mt-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-[#1e1b3a] p-4 rounded shadow border border-gray-700"
            >
              <p className="text-sm text-gray-300 mb-1">
                <span className="font-semibold">{review.user_id?.username}</span> says:
              </p>
              <p className="text-white">{review.description}</p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(review.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewListPage;
