import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { title, message, variant } = attributes;

  return (
    <div {...useBlockProps.save({ className: `notice notice--${variant}` })}>
      <RichText.Content tagName="h3" value={title} />
      <RichText.Content tagName="p" value={message} />
    </div>
  );
}
