export default function SecretResearch() {
  return (
    <div className="page">
      <h2>CSCI 698 - How to Evaluate Human-AI Collaborative Systems</h2>

      <p>
        In this talk, we explore how to rigorously evaluate systems where humans
        and AI work together. We’ll compare intrinsic and extrinsic evaluations,
        discuss what each reveals, and highlight why human-centered metrics are
        essential for understanding real-world effectiveness.
      </p>

      {/* Embedded YouTube Video */}
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/JY2CS-BNK-w?si=xvDTYlPxFh17a0P4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <h3>Slides</h3>

      {/* PDF Embed */}
      <embed
        src="/assets/slides.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
        title="Embedded PDF Viewer"
      />
    </div>
  );
}
