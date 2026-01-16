import { Group } from "@mantine/core";

function Footer() {
  return (
    <div id="footer">
      <Group justify="space-between" className="footer-group">
        <p>
          Website design credits to Catherine Yeh 🌸 {" "}
          <span className="lighter">(Updated January 2026)</span>
        </p>

        <a onClick={() => window.scrollTo(0, 0)} title="Back to top">
          Back to top
        </a>
      </Group>
      <span className="accent monospace smaller grad1">
        jranjit [at] usc [dot] edu
      </span>
    </div>
  );
}

export default Footer;
