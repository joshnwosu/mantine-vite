import { SegmentedControl, Text, createStyles } from "@mantine/core";
import { useEffect } from "react";

const useStyle = createStyles((theme) => ({
  title: {
    fontSize: 20,
    color: theme.colors[theme.primaryColor][6],
    fontWeight: "lighter",
  },
}));

export default function App() {
  const { classes, theme } = useStyle();

  useEffect(() => {
    console.log("Color Scheme: ", theme.colorScheme);
  }, []);

  return (
    <>
      <Text className={classes.title}>Welcome to Mantine!</Text>
      <SegmentedControl
        data={["All", "Iyana Ipaja", "Ajah", "Lekki", "Ikoyi", "Egbeda"]}
      />
    </>
  );
}
