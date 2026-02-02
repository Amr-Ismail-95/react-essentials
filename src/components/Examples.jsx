import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

const Examples = () => {
  const [content, setContent] = useState("");

  function handleSelect(selectedButton) {
    setContent(selectedButton);
    console.log(content);
  }

  let tabContent = <p>Please select a topic</p>;
  if (content) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[content].title}</h3>
        <p>{EXAMPLES[content].description}</p>
        <pre>
          <code>{EXAMPLES[content].code}</code>
        </pre>
      </div>
    );
  }

  const examplesButtons = (
    <>
      <TabButton
        isSelected={content === "components"}
        onSelect={() => handleSelect("components")}
      >
        Comonents
      </TabButton>
      <TabButton
        isSelected={content === "jsx"}
        onSelect={() => handleSelect("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={content === "props"}
        onSelect={() => handleSelect("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={content === "state"}
        onSelect={() => handleSelect("state")}
      >
        State
      </TabButton>
    </>
  );
  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={examplesButtons}>{tabContent}</Tabs>
    </Section>
  );
};

export default Examples;
