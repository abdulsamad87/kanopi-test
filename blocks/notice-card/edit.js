import { RichText, InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { title, message, variant } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Settings">
          <SelectControl
            label="Variant"
            value={variant}
            options={[
              { label: "Info", value: "info" },
              { label: "Success", value: "success" },
              { label: "Warning", value: "warning" }
            ]}
            onChange={(value) => setAttributes({ variant: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps({ className: `notice notice--${variant}` })}>
        <RichText
          tagName="h3"
          value={title}
          onChange={(value) => setAttributes({ title: value })}
        />
        <RichText
          tagName="p"
          value={message}
          onChange={(value) => setAttributes({ message: value })}
        />
      </div>
    </>
  );
}
