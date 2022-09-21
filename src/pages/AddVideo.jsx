import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const AddVideo = () => {
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [descroption, setDescroption] = useState("");
  const [url, setUrl] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const video = { title, descroption, url, duration };
    console.log(video)

    const response = await fetch("/api/videos", {
      method: "POST",
      body: JSON.stringify(video),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDescroption("");
      setUrl("");
      setError(null);
      setDuration("");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Video</h3>

      <label>Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>descroption:</label>
      <input
        type="text"
        onChange={(e) => setDescroption(e.target.value)}
        value={descroption}
      />

      <label>Url:</label>
      <input
        type="text"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      <label>duration:</label>
      <input
        type="text"
        onChange={(e) => setDuration(e.target.value)}
        value={duration}
      />

      <button>Add Videot</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddVideo;
