import { Tip as TipType } from "./advice";

function Tip(props: TipType) {
  let newText = props.text;
  props.links?.forEach((link) => {
    newText = newText.replace(
      link.text,
      `<a href="${link.url}" target="_blank" title="${link.text}">${link.text}</a>`
    );
  });
  props.bold?.forEach((bold) => {
    newText = newText.replace(bold, `<b>${bold}</b>`);
  });
  return (
    <div className="tip">
      <p dangerouslySetInnerHTML={{ __html: newText }} />
    </div>
  );
}

export default Tip;
