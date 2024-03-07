import Tabs from "./tabs";
import "./tabs.css";

function RandomComponent() {
  return <h1>Some Random Content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab3",
      content: <RandomComponent />,
    },
  ];
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
