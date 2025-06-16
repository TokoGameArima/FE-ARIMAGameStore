import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../../api/productApi";
import { createReview } from "../../api/reviewApi";

const ReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const data = await getProductById(id);
        setGame(data);
      } catch (err) {
        console.error("Failed to fetch game");
        navigate("/games");
      }
    };
    fetchGame();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    try {
      setLoading(true);
      await createReview({
        game_id: id,
        description: reviewText,
      });
      alert("Thank you for your review!");
      navigate("/orders");
    } catch (err) {
      console.error("Submit review failed:", err);
      alert("Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };

  if (!game) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="bg-[#0f021e] text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Review: {game.name}</h1>

      <form onSubmit={handleSubmit} className="bg-[#1e1b3a] p-6 rounded space-y-4">
        <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder="Write your thoughts about this game..." className="w-full h-40 p-4 rounded bg-[#2a2440] text-white outline-none resize-none"></textarea>

        <button type="submit" disabled={loading || !reviewText.trim()} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded w-full">
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;
